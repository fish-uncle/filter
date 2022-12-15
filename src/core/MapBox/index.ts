import { useStyleTag } from '@vueuse/core'
import Factory from '@/core/Base/factory'
import MapConfig from '@/core/MapBox/config'

export default class Map extends Factory<Map> {
	config: MapConfig = MapConfig.Instance()
	marker
	type = 'MapBox'

	viewer // mapbox 实例

	constructor() {
		super()
	}

	install() {
		this.viewer = new window.mapboxgl.Map(this.config.setting)
		this.performance()
	}

	async load() {
		const { load } = useStyleTag('.mapboxgl-canvas{width:100%!important;height:100%!important;}')
		await load()
	}

	async init() {
		await this.load()
		this.install()
	}

	performance() {
		// 性能优化部分
	}
}
