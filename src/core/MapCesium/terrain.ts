import Factory from '@/core/Base/factory'

/**
 * @description 地形
 */
export default class MapTerrain extends Factory<MapTerrain> {
	enableLighting = true // 地形照明

	enableFog = false // 雾气

	terrainExaggeration = 2 // 地形夸张系数

	enableWaterMask = true // 水效果

	depthTestAgainstTerrain = true // 高层遮挡 即视角范围内的山体会遮挡建筑

	// 地形 cesium 全球3D地形
	terrainProviderWorldTerrain

	init(viewer) {
		this.terrainProviderWorldTerrain = window.Cesium.createWorldTerrain({
			// requestVertexNormals: this.enableLighting,
			requestWaterMask: this.enableWaterMask,
		})
		viewer.scene.globe.depthTestAgainstTerrain = this.depthTestAgainstTerrain
		viewer.scene.globe.terrainExaggeration = this.terrainExaggeration
		viewer.scene.fog.enabled = this.enableFog
		// viewer.terrainProvider = this.terrainProviderWorldTerrain
		// viewer.scene.globe.enableLighting = this.enableLighting
	}
}
