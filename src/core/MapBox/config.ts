import Factory from '@/core/Base/factory'

/**
 * @description 配置信息
 */
export default class MapConfig extends Factory<MapConfig> {
	viewerClassName = 'map-container' // map className

	setting = {
		container: this.viewerClassName,
		style: 'mapbox://styles/6j/claw9br25000715l4regl2ps7',
		center: [120.92005076856685, 30.84521190078773],
		zoom: 14,
		pitch: 58.5,
		bearing: -22.4,
	}

	// mapbox token
	defaultAccessToken = 'pk.eyJ1IjoiNmoiLCJhIjoiY2w2ZjBheWh0MDEwZTNqbWpvdXNqenBkMSJ9.Szh_MSx30b_YRpO7Z8iqiA'

	constructor() {
		super()
		window.mapboxgl.accessToken = this.defaultAccessToken
	}
}
