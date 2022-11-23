<template lang="pug">
#map-box
	#cesiumContainer
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
	name: 'JMap',
	setup() {
		onMounted(() => {
			window.map.install()
			window.map.init()
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
.jz-marker-title {
	color: yellow;
}
</style>
