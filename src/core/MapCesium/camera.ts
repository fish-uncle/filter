import Factory from '@/core/Base/factory'

/**
 * @description 摄像头
 */
export default class MapCamera extends Factory<MapCamera> {
	position = {
		destination: window.Cesium.Cartesian3.fromDegrees(120.90401678373897, 30.814169540334195, 162746.71572672753), // 设置位置
		orientation: {
			heading: 0.3797699226217297, // 方向
			pitch: -1.5461017202043945, // 倾斜角度
			roll: 0,
		},
	}

	constructor() {
		super()
	}

	// 设置镜头到具体位置及角度
	init = viewer => {
		viewer.camera.setView(this.position)
	}

	// 获取当前视角位置及角度
	currentPosition = viewer => {
		const xyz = new window.Cesium.Cartesian3(
			viewer.camera.position.x,
			viewer.camera.position.y,
			viewer.camera.position.z,
		)
		const wgs84 = window.Cesium.Ellipsoid.WGS84.cartesianToCartographic(xyz)
		console.log('当前相机位', {
			longitude: window.Cesium.Math.toDegrees(wgs84.longitude),
			latitude: window.Cesium.Math.toDegrees(wgs84.latitude),
			height: wgs84.height,
			heading: viewer.camera.heading,
			pitch: viewer.camera.pitch,
			roll: viewer.camera.roll,
		})
		return {
			longitude: window.Cesium.Math.toDegrees(wgs84.longitude),
			latitude: window.Cesium.Math.toDegrees(wgs84.latitude),
			height: wgs84.height,
			heading: viewer.camera.heading,
			pitch: viewer.camera.pitch,
			roll: viewer.camera.roll,
		}
	}

	// 获取点击时的视角位置及角度
	clickPosition = (viewer, e) => {
		const clickPosition = viewer.scene.camera.pickEllipsoid(e.position)
		const radiansPos = window.Cesium.Cartographic.fromCartesian(clickPosition)
		console.log('当前点击点', {
			longitude: window.Cesium.Math.toDegrees(radiansPos.longitude),
			latitude: window.Cesium.Math.toDegrees(radiansPos.latitude),
		})
	}
}
