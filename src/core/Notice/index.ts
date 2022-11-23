import Factory from '@/core/Base/factory'
import Stomp from 'stompjs'
import { v4 as uuidv4 } from 'uuid'
import { NoticeType } from '../../../typings/map'
import { useWarningStore } from '@/store'

export default class Notice extends Factory<Notice> {
	host = 'ralifeline.china-goldcard.com'
	port = '15674'
	username = 'lifeline'
	password = 'lifelinepw'
	directExchange = 'lifelineAlarmDirectExchange'

	client
	callback = {}

	errorAgain = true // 是否连接失败重试
	errorAgainTimes = -1 // -1 表示一直重试
	errorAgainIntervalTime = 3000 // 重试间隔时间
	constructor() {
		super()
		this.init()
	}

	init() {
		this.client = Stomp.client(`wss://${this.host}/ws`)
		const _this = this
		this.client.connect(
			this.username,
			this.password,
			() => this.connectCallback(_this),
			e => this.errorCallback(e, _this),
		)
	}

	connectCallback(_this) {
		this.client.subscribe(`/exchange/${_this.directExchange}`, message => _this.responseCallback(message, _this), {
			ack: 'client',
			durable: true,
			id: uuidv4(),
			// 'x-message-ttl': 10000, // 超时时间
		})
	}

	errorAgainFun(_this) {
		if (!this.client.connected) {
			if (this.errorAgainTimes === -1 || this.errorAgainTimes > 0) {
				setTimeout(() => {
					this.client.connect(
						this.username,
						this.password,
						() => this.connectCallback(_this),
						e => this.errorCallback(e, _this),
					)
					if (this.errorAgainTimes === -1) {
						this.errorAgainFun(_this)
					} else if (this.errorAgainTimes > 0) {
						this.errorAgainTimes--
						this.errorAgainFun(_this)
					}
				}, this.errorAgainIntervalTime)
			}
		}
	}

	errorCallback(e, _this) {
		console.log('连接失败', e)
		if (_this.errorAgain) {
			_this.errorAgainFun(_this)
		}
	}

	on(type: NoticeType, callback) {
		if (!this.callback[type]) this.callback[type] = []
		this.callback[type].push(callback)
	}

	emit(type: NoticeType, ...arg: any[]) {
		if (this.callback.hasOwnProperty(type))
			this.callback[type].forEach((fn: Function) => {
				fn(...arg)
			})
	}

	off(type: NoticeType, callback: Function) {
		if (this.callback[type] && this.callback[type] instanceof Array) {
			const idx = this.callback[type].findIndex((el: Function) => el == callback)
			if (idx >= 0) {
				this.callback[type].splice(idx, 1)
			}
		}
	}

	responseCallback(message, _this) {
		const data = JSON.parse(message.body)
		if (data?.pushType == 1) {
			_this.emit('warn-active', data)
		}
		if (data?.pushType == 11) {
			const warningStore = useWarningStore()
			if (warningStore.iotDeviceId === data?.iotDeviceId) {
				_this.emit('warn-relieve', data)
			}
		}
		message.ack()
	}
}
