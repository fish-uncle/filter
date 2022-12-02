import Factory from '@/core/Base/factory'

/**
 * @description 3D 建筑
 */
export default class MapBuilding extends Factory<MapBuilding> {
	globalTileSet // 全球 3D 建筑实例
	extrudedHeight = 4 // 建筑高度夸张系数

	constructor() {
		super()
	}

	// 添加全球3D建筑
	loadGlobalBuildings(viewer) {
		this.globalTileSet = viewer.scene.primitives.add(window.Cesium.createOsmBuildings())
	}

	init(viewer) {
		this.loadGlobalBuildings(viewer)
		// this.loadRuiAnBuildings(viewer)
	}

	// 添加瑞安3D建筑 通过 geojson 方式加载3D白模建筑
	loadRuiAnBuildings(viewer) {
		window.Cesium.GeoJsonDataSource.load(`./map/geojson/building.geojson`).then(geoJSON => {
			viewer.dataSources.add(geoJSON).then(dataSource => {
				for (const entity of dataSource.entities.values) {
					entity.polygon.classificationType = window.Cesium.ClassificationType.TERRAIN
					// 材质
					entity.polygon.material = window.Cesium.Color.fromCssColorString('#f5fcff').withAlpha(0.7)
					// 描边色
					entity.polygon.outlineColor = window.Cesium.Color.fromCssColorString('#3895e5').withAlpha(0.8)
					// 设置面的拉伸高度
					// entity.polygon.extrudedHeight = entity.properties._Height._value * this.extrudedHeight
				}
			})
		})
	}
}
