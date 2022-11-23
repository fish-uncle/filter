import Map from '@/core/Map'

declare global {
	interface Window {
		map: Map
		Cesium: any
		echarts: any
	}
}
export {}
