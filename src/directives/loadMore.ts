import _ from 'lodash'

export default (el, binding) => {
	const fun = _.debounce(() => {
		binding.value()
	}, 1000)
	let flag = true
	const handler = () => {
		if (el.scrollHeight - el.offsetHeight <= el.scrollTop + 1) {
			if (flag) {
				binding.value()
				flag = false
			} else {
				fun()
			}
		}
	}
	el.addEventListener('scroll', handler)
}
