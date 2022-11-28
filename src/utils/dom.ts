export const on = function (
	element: HTMLElement | Document | Window,
	event: string,
	handler: EventListenerOrEventListenerObject,
	useCapture = false,
): void {
	if (element && event && handler) {
		element.addEventListener(event, handler, useCapture)
	}
}

export const off = function (
	element: HTMLElement | Document | Window,
	event: string,
	handler: EventListenerOrEventListenerObject,
	useCapture = false,
): void {
	if (element && event && handler) {
		element.removeEventListener(event, handler, useCapture)
	}
}

export const once = function (el: HTMLElement, event: string, fn: EventListener): void {
	const listener = function (...args: unknown[]) {
		if (fn) {
			fn.apply(this, args)
		}
		off(el, event, listener)
	}
	on(el, event, listener)
}

export const isElement = (e: unknown): e is Element => {
	if (typeof Element === 'undefined') return false
	return e instanceof Element
}
