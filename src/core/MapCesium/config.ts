import Factory from '@/core/Base/factory'

/**
 * @description 配置信息
 */
export default class MapConfig extends Factory<MapConfig> {
	viewerClassName = 'map-container' // map className

	// cesium token
	defaultAccessToken =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxYmIwZmU0Zi0zNjQ4LTRlMWYtOWZiMy04OWQxMGNmNjAyMTEiLCJpZCI6MTAzNTcxLCJpYXQiOjE2NTk1NzYwNjN9.O4pDwGsMMVSiuER3hZrcUrckBW5kyYukNUpqA1eYw2Q'

	setting = {
		animation: false, // 是否创建动画小器件，左下角仪表
		baseLayerPicker: false, // 是否显示图层选择器
		fullscreenButton: false, // 是否显示全屏按钮
		geocoder: false, // 是否显示geocoder小器件，右上角查询按钮
		homeButton: false, // 是否显示Home按钮
		infoBox: false, // 是否显示信息框
		sceneModePicker: false, // 是否显示3D/2D选择器
		selectionIndicator: false, // 是否显示选取指示器组件
		timeline: false, // 是否显示时间轴
		navigationHelpButton: false, // 是否显示右上角的帮助按钮
		shouldAnimate: false, // 允许模型动画
		shadows: false, // 阴影
		skyAtmosphere: false, // 去掉地球光圈
		scene3DOnly: true, // 如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
		showRenderLoopErrors: false, //是否显示渲染错误
		contextOptions: {
			requestWebgl2: true, // 开启webGL 2.0
		},
	}

	constructor() {
		super()
		window.Cesium.Ion.defaultAccessToken = this.defaultAccessToken
	}
}
