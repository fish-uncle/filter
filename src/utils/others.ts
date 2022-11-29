/**
 * @description 获取url参数
 */
export const getQueryString = (name): null | string => {
	const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
	const r = window.location.search.substr(1).match(reg)
	if (r != null) return unescape(r[2])
	return null
}

/**
 *
 * @param hex 例如:"#23ff45"
 * @param opacity 透明度
 * @returns {string}
 */
export const hexToRgba = (hex, opacity) => {
	if (hex.includes('rgba')) {
		const arr = hex.split(',')
		arr[3] = arr[3].replace(/\d+/, opacity)
		return arr.toString()
	}
	return (
		'rgba(' +
		parseInt('0x' + hex.slice(1, 3)) +
		',' +
		parseInt('0x' + hex.slice(3, 5)) +
		',' +
		parseInt('0x' + hex.slice(5, 7)) +
		',' +
		opacity +
		')'
	)
}

export const connectorToUppercase = (str): string => {
	if (!str) return ''
	let arr = str.split('-')
	arr = arr.map(item => {
		const a = item.split('')
		a[0] = a[0].toUpperCase()
		return a.join('')
	})
	return arr.join('')
}

export function uuid(): string {
	return Math.random().toString(36).replace('0.', '')
}
