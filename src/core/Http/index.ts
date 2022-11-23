import Task from './task'
import Factory from '@/core/Base/factory'
import HttpTask from './task'
import { Method } from 'axios'

export default class Http extends Factory<Http> {
	limit = 1
	loopPool: { [key: string]: Task } = {} // 时间loop任务队列
	waitPool: Array<Task> = [] // 待请求任务队列
	currentPool: Array<Task> = [] // 请求任务队列
	loading = false
	domain = ''
	path = ''
	headers = {}
	timer: any = null
	successCode = 0
	authCode = 401
	prefix = 'jz-screen-'

	cacheUrl = {}
	cacheExpirationTime = 1000 * 60 * 60 * 24

	request(widget: {
		params?: { [key: string]: any }
		url: string
		method?: Method
		autoFetchEnable?: boolean
		autoFetchDuration?: number
		success?: Function
	}) {
		const { params, url, method = 'GET', autoFetchEnable, autoFetchDuration, success } = widget
		const loopTime = autoFetchEnable ? Number(autoFetchDuration) : 0
		if (!this.cacheUrl[url]) {
			const cache = localStorage.getItem(`${this.prefix}${url}`)
			if (cache) {
				this.cacheUrl[url] = true
				;(success as Function)(JSON.parse(cache))
			}
		}
		this.pushOne(
			new HttpTask({ method, url, params, loopTime, domain: this.domain, headers: this.headers, success }),
		)
	}

	pushOne(task: Task): void {
		if (task.loopTime > 0) {
			const i = task.url
			this.loopPool[i] = task
			this.startInterval()
		}
		this.push2Wait(task)
	}

	push2Wait(task: Task) {
		this.waitPool.push(task)
		task.status = Task.STATUS_WAIT
		if (!this.loading) {
			this.run()
		}
	}

	retry(t: Task, res) {
		t.errorCount++
		if (t.errorCount < t.maxErrorCount) {
			t.status = Task.STATUS_RETRY
			this.push2Wait(t)
		} else {
			typeof t.catchCallBack === 'function' && t.catchCallBack(res)
		}
	}

	startInterval(): void {
		if (this.timer) return
		this.timer = setInterval(() => {
			Object.keys(this.loopPool).forEach(key => {
				if (Date.now() - this.loopPool[key].lastTime > this.loopPool[key].loopTime && this.loopPool[key]) {
					this.push2Wait(this.loopPool[key])
				}
			})
		}, 1000)
	}

	cache(task, res) {
		const cache = localStorage.getItem(`${this.prefix}${task.url}`)
		if (cache) {
			const time = Number(localStorage.getItem(`${this.prefix}time-${task.url}`))
			if (+new Date() - time <= this.cacheExpirationTime) {
				localStorage.setItem(`${this.prefix}${task.url}`, JSON.stringify(res.value.data))
				localStorage.setItem(`${this.prefix}time-${task.url}`, (+new Date()).toString())
			}
		} else {
			localStorage.setItem(`${this.prefix}${task.url}`, JSON.stringify(res.value.data))
			localStorage.setItem(`${this.prefix}time-${task.url}`, (+new Date()).toString())
		}
	}

	run() {
		this.loading = true
		if (this.waitPool.length > 0) {
			this.currentPool = this.waitPool.splice(0, this.limit)
			const list: Array<Promise<any>> = []
			this.currentPool.forEach(task => {
				task.status = Task.STATUS_READY
				list.push(task.create())
			})
			Promise.allSettled(list).then(result => {
				result.forEach((res, index) => {
					const task: Task = this.currentPool[index]
					if (res.status === 'rejected') {
						if (task.loopTime === 0) {
							this.retry(task, res)
						}
					} else {
						task.status = Task.STATUS_FINISH
						if (res.value.code === this.successCode) {
							this.cache(task, res)
							typeof task.thenCallBack === 'function' && task.thenCallBack(res.value.data)
						} else if (res.value.code === this.authCode) {
							const { host, protocol, href } = window.location
							const baseURL =
								protocol + '//' + 'ralifeline' + host.slice(host.indexOf('.'), host.length) + '/'
							window.location.href = `${baseURL}login?redict_url=${href}`
							// const url = encodeURIComponent(location.href)
							// if ('screen.lifeline.jinka.cn' === location.hostname) {
							// 	window.location.href = `http://ra.lifeline.jinka.cn:32080/login?redict_url=${url}`
							// } else {
							// 	window.location.href = `https://ralifeline.china-goldcard.com/login?redict_url=${url}`
							// }
						} else {
							typeof task.catchCallBack === 'function' && task.catchCallBack()
						}
					}
					task.lastTime = Date.now()
				})
				this.run()
			})
		} else {
			this.stop()
		}
	}

	abortOne(id: string): void {
		delete this.loopPool[id]
	}

	abortAll(): void {
		this.waitPool = []
		this.loopPool = {}
		this.currentPool = []
		this.stop()
		this.stopLoop()
	}

	stop() {
		this.loading = false
	}

	stopLoop() {
		if (this.timer) {
			clearInterval(this.timer)
			this.timer = null
		}
	}
}
