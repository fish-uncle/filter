<template lang="pug">
#map-box
	#cesiumContainer
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import Screen from '@/core/Screen'

export default defineComponent({
	name: 'HomeMap',
	setup() {
		onMounted(() => {
			const screen: Screen = Screen.Instance()
			screen.init()
			window.map.init()
			new window.Cesium.ScreenSpaceEventHandler(window.map.viewer.scene.canvas).setInputAction(function (e) {
				window.map.camera.clickPosition(window.map.viewer, e)
				window.map.camera.currentPosition(window.map.viewer)
			}, window.Cesium.ScreenSpaceEventType.LEFT_CLICK)
		})
	},
})
</script>
<style lang="scss" scoped>
#map-box {
	width: 100%;
	height: 100%;
}
#cesiumContainer {
	width: 100%;
	height: 100%;
}
</style>
