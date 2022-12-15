import MapCesium from '@/core/MapCesium'
import MapBox from '@/core/MapBox'

declare global {
	interface Window {
		map: MapCesium | MapBox
		mapboxgl: any
		Cesium: any
		echarts: any
	}
}
export {}
