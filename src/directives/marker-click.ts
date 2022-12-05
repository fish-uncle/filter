import { isClient } from '@vueuse/core'
import { isElement, uuid } from '@/utils'

import type { DirectiveBinding, ObjectDirective } from 'vue'

type DocumentHandler = <T extends MouseEvent>(mouseup: T, mousedown: T) => void
type FlushList = Map<
	HTMLElement,
	{
		documentHandler: DocumentHandler
		bindingFn: (...args: unknown[]) => unknown
	}[]
>

const nodeList: FlushList = new Map()

let startClick: MouseEvent

if (isClient) {
	document.addEventListener('mousedown', (e: MouseEvent) => (startClick = e))
	document.addEventListener('mouseup', (e: MouseEvent) => {
		for (const handlers of nodeList.values()) {
			for (const { documentHandler } of handlers) {
				documentHandler(e as MouseEvent, startClick)
			}
		}
	})
}
// @ts-ignore
function createDocumentHandler(el: HTMLElement, binding: DirectiveBinding): DocumentHandler {
	let excludes: HTMLElement[] = []
	if (Array.isArray(binding.arg)) {
		excludes = binding.arg
	} else if (isElement(binding.arg)) {
		// due to current implementation on binding type is wrong the type casting is necessary here
		excludes.push(binding.arg as unknown as HTMLElement)
	}
	// @ts-ignore
	return function (mouseup, mousedown) {
		const mouseUpTarget = mouseup.target as Node
		const isSelf = el.outerHTML === (mouseUpTarget as HTMLElement).outerHTML

		if (isSelf) {
			binding.value(mouseup, mousedown)
		}
	}
}

export default {
	beforeMount(el: HTMLElement, binding: DirectiveBinding) {
		// there could be multiple handlers on the element
		if (!nodeList.has(el)) {
			nodeList.set(el, [])
		}
		el.id = uuid()
		nodeList.get(el)!.push({
			documentHandler: createDocumentHandler(el, binding),
			bindingFn: binding.value,
		})
	},
	updated(el: HTMLElement, binding: DirectiveBinding) {
		if (!nodeList.has(el)) {
			nodeList.set(el, [])
		}
		const handlers = nodeList.get(el)!
		const oldHandlerIndex = handlers.findIndex(item => item.bindingFn === binding.oldValue)
		const newHandler = {
			documentHandler: createDocumentHandler(el, binding),
			bindingFn: binding.value,
		}

		if (oldHandlerIndex >= 0) {
			// replace the old handler to the new handler
			handlers.splice(oldHandlerIndex, 1, newHandler)
		} else {
			handlers.push(newHandler)
		}
	},
	unmounted(el: HTMLElement) {
		// remove all listeners when a component unmounted
		nodeList.delete(el)
	},
} as ObjectDirective
