import Factory from '@/core/Base/factory'
import { getQueryString } from '@/utils'

/**
 * @description 屏幕适配
 */
export default class Screen extends Factory<Screen> {
	width = 4267
	height = 1080
	layoutMode: 'full-width' | 'full-size' | 'full-height' | 'full-none' = 'full-size'
	contentId = 'home-content'
	containerId = 'home-container'
	mapContainerId = 'map-box'
	style = ''
	styleReturn = ''

	constructor() {
		super()
	}

	init(map) {
		let scaleX = 0,
			scaleY = 1,
			actualScaleRatio = 1,
			scale = ''
		const { clientWidth, clientHeight } = document.body
		const layoutMode = getQueryString('layoutMode')
		const contentDom = document.getElementById(this.contentId) as HTMLElement
		const containerDom = document.getElementById(this.containerId) as HTMLElement
		const mapDom = document.getElementById(this.mapContainerId) as HTMLElement
		if (layoutMode === 'full-none') {
			containerDom.style.width = `${this.width}px`
			containerDom.style.height = `${this.height}px`
			containerDom.style.overflow = 'auto'
			contentDom.style.width = `${this.width}px`
			contentDom.style.height = `${this.height}px`
			contentDom.style.transform = 'translate3d(0, 0, 0)'
			if (mapDom) mapDom.style.transform = 'translate3d(0, 0, 0)'
			return false
		}
		if (layoutMode === 'full-width' || layoutMode === 'full-size' || layoutMode === 'full-height')
			this.layoutMode = layoutMode
		switch (this.layoutMode) {
			case 'full-size':
				scaleX = clientWidth / this.width
				scaleY = clientHeight / this.height
				break
			case 'full-width':
				actualScaleRatio = clientWidth / this.width
				break
			case 'full-height':
				actualScaleRatio = clientHeight / this.height
				break
		}
		if (this.layoutMode === 'full-size') {
			scale = `${scaleX},${scaleY}`
		} else {
			scale = `${actualScaleRatio}`
		}
		contentDom.style.width = this.width + 'px'
		contentDom.style.height = this.height + 'px'
		this.style = `scale(${scale}) translate3d(0, 0, 0)`
		contentDom.style.transform = this.style
		if (this.layoutMode === 'full-size') {
			this.styleReturn = `scale(${1 / scaleX},${1 / scaleY}) translate3d(0, 0, 0)`
		} else {
			this.styleReturn = `scale(${1 / actualScaleRatio}) translate3d(0, 0, 0)`
		}
		if (mapDom) {
			if (map.type === 'MapCesium') mapDom.style.transform = this.styleReturn
		}
	}
}
