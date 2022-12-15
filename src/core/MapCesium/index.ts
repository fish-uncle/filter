import Factory from '@/core/Base/factory'
import MapConfig from '@/core/MapCesium/config'
import MapCamera from '@/core/MapCesium/camera'
import MapBuilding from '@/core/MapCesium/building'
import MapImagery from '@/core/MapCesium/imagery'
import MapTerrain from '@/core/MapCesium/terrain'
import MapMarker from '@/core/MapCesium/marker'

export default class Map extends Factory<Map> {
	config: MapConfig = MapConfig.Instance()
	imagery: MapImagery = MapImagery.Instance()
	camera: MapCamera = MapCamera.Instance()
	building: MapBuilding = MapBuilding.Instance()
	terrain: MapTerrain = MapTerrain.Instance()
	marker
	type = 'MapCesium'

	viewer // cesium viewer实例

	constructor() {
		super()
	}

	install() {
		this.viewer = new window.Cesium.Viewer(this.config.viewerClassName, this.config.setting)
		this.camera.init(this.viewer)
		this.viewer.imageryLayers.get(0).show = false // cesium 默认图层不展示
		this.viewer.imageryLayers.addImageryProvider(this.imagery.imageryProviderMapBox) // 添加图层
		this.performance()
	}

	debugger(){
		new window.Cesium.ScreenSpaceEventHandler(window.map.viewer.scene.canvas).setInputAction(function (e) {
			// @ts-ignore
			window.map.camera.clickPosition(window.map.viewer, e)
			// @ts-ignore
			window.map.camera.currentPosition(window.map.viewer)
		}, window.Cesium.ScreenSpaceEventType.LEFT_CLICK)
	}
	
	init() {
		this.install()
		this.debugger()
		this.marker = MapMarker.Instance(this.viewer)
		this.terrain.init(this.viewer)
		// this.building.init(this.viewer)
	}

	performance() {
		// 性能优化部分
		this.viewer.scene.sun.show = false // 隐藏太阳
		this.viewer.scene.moon.show = false // 隐藏月亮
		this.viewer.scene.skyBox.show = false // 关闭天空盒，否则会显示天空颜色
		this.viewer.scene.globe.baseColor = new window.Cesium.Color(0, 0, 0, 0)
		//判断是否支持图像渲染像素化处理
		// @ts-ignore
		if (window.Cesium.FeatureDetection.supportsImageRenderingPixelated()) {
			let dpr = window.devicePixelRatio
			// 适度降低分辨率
			while (dpr >= 2.0) {
				dpr /= 2.0
			}
			this.viewer.resolutionScale = dpr
		}
		// @ts-ignore
		this.viewer.scene.fxaa = true // 抗锯齿
		this.viewer.scene.postProcessStages.fxaa.enabled = true // 抗锯齿
	}
}
