/**
 * @description 自定义的广告牌
 * @params 经度
 * @params 纬度
 * @params 底部圆和横线的颜色
 * @params icon地址
 */
export default class {
	viewer
	constructor(viewer) {
		this.viewer = viewer
	}
	add({ longitude, latitude, name, color, url }) {
		this.viewer.entities.add({
			name: name,
			position: window.Cesium.Cartesian3.fromDegrees(longitude, latitude, 300),
			// 图标
			billboard: {
				image: url,
				width: 50,
				height: 50,
			},
			label: {
				//文字标签
				text: name,
				font: '20px sans-serif',
				style: window.Cesium.LabelStyle.FILL,
				// 对齐方式(水平和竖直)
				horizontalOrigin: window.Cesium.HorizontalOrigin.LEFT,
				verticalOrigin: window.Cesium.VerticalOrigin.CENTER,
				pixelOffset: new window.Cesium.Cartesian2(20, -2),
				showBackground: true,
				backgroundColor: new window.Cesium.Color.fromBytes(0, 70, 24),
			},
		})

		function getColorRamp(val) {
			if (val == null) {
				val = { 0.0: 'blue', 0.1: 'cyan', 0.37: 'lime', 0.54: 'yellow', 1: 'red' }
			}
			var ramp = document.createElement('canvas')
			ramp.width = 295
			ramp.height = 4
			var ctx = ramp.getContext('2d')
			var grd = ctx.createLinearGradient(0, 0, 295, 0)
			for (var key in val) {
				grd.addColorStop(1 - Number(key), val[key])
			}
			ctx.fillStyle = grd
			ctx.fillRect(0, 0, 295, 4)
			return ramp
		}
		const drawGradientLine = colorStops => {
			const canvas = document.createElement('canvas')
			const context = canvas.getContext('2d')
			canvas.width = 285
			canvas.height = 4
			context.moveTo(0, 0)
			context.lineTo(295, 0)
			const line = context.createLinearGradient(0, 0, 295, 0)
			line.addColorStop(0, colorStops[1])
			line.addColorStop(1, colorStops[0])
			// for (let i = 0; i < colorStops.length; i++) {
			// 	line.addColorStop(i / colorStops.length, colorStops[i])
			// }
			context.lineWidth = 4
			context.strokeStyle = line
			context.stroke()
			return canvas
		}

		// 先画线后画点，防止线压盖点
		let linePositions = []
		linePositions.push(new window.Cesium.Cartesian3.fromDegrees(longitude, latitude, 5))
		linePositions.push(new window.Cesium.Cartesian3.fromDegrees(longitude, latitude, 300))
		const rgba = window.Cesium.Color.fromCssColorString(color)
		this.viewer.entities.add({
			polyline: {
				positions: linePositions,
				width: 4,
				// material: window.Cesium.Color.fromCssColorString(color).withAlpha(0.5),
				material: new window.Cesium.ImageMaterialProperty({
					transparent: true,
					image: getColorRamp({
						0.0: Cesium.Color.fromCssColorString('#FF5900').withAlpha(1.0).toCssColorString(),
						0.76: Cesium.Color.fromCssColorString('#FFB800').withAlpha(0.76).toCssColorString(),
						1.0: Cesium.Color.fromCssColorString('#FFB800').withAlpha(0).toCssColorString(),
					}),
					repeat: new Cesium.Cartesian2(1.0, 1.0),
					// image: drawGradientLine([
					// 	rgba.withAlpha(1.0).toCssColorString(),
					// 	rgba.withAlpha(0).toCssColorString(),
					// ]),
				}),
			},
		})

		// 画点
		this.viewer.entities.add({
			// 给初始点位设置一定的离地高度，否者会被压盖
			position: Cesium.Cartesian3.fromDegrees(longitude, latitude, 5),
			point: {
				color: Cesium.Color.fromCssColorString(color),
				pixelSize: 15,
			},
		})
	}
}
