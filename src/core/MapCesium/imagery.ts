import Factory from '@/core/Base/factory'

/**
 * @description 图层
 */
export default class MapImagery extends Factory<MapImagery> {
	// 图层 MapBox 图层
	imageryProviderMapBox = new window.Cesium.MapboxStyleImageryProvider({
		username: '6j',
		styleId: 'claw9br25000715l4regl2ps7',
		accessToken: 'pk.eyJ1IjoiNmoiLCJhIjoiY2w2ZjBheWh0MDEwZTNqbWpvdXNqenBkMSJ9.Szh_MSx30b_YRpO7Z8iqiA',
	})

	constructor() {
		super()
	}
}
