<template lang="pug">
#map-box
	#map-container.pos-r
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import Screen from '@/core/Screen'

export default defineComponent({
	name: 'HomeMap',
	setup() {
		onMounted(() => {
			const screen: Screen = Screen.Instance()
			screen.init(window.map)
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
#map-container {
	width: 100%;
	height: 100%;
}
</style>
