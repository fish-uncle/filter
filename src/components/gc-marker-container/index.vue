<template lang="pug">
.gc-marker-container(ref="markerRef")
	div(:style="{ transform: screen.style }")
		slot
</template>
<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, ref, reactive, PropType, toRefs, onUpdated } from 'vue'
import Screen from '@/core/Screen'

interface PositionProps {
	latitude: number
	longitude: number
	height?: number
}
export default defineComponent({
	name: 'GcMarkerContainer',
	props: {
		position: {
			type: Object as PropType<PositionProps>,
		},
	},
	setup(props) {
		const markerRef = ref<null | HTMLElement>(null)
		const screen: Screen = Screen.Instance()
		const state = reactive({
			screen,
			instance: undefined,
		})

		const init = () => {
			if (markerRef.value) {
				state.instance = window.map.marker.load(props.position, markerRef.value.innerHTML)
			}
		}

		onMounted(() => {
			init()
		})

		onUpdated(() => {
			// @ts-ignore
			state.instance.setContent(markerRef.value.innerHTML)
		})

		onBeforeUnmount(() => {
			if (state.instance) {
				;(state.instance as any).remove()
			}
		})
		return {
			...toRefs(state),
			markerRef,
		}
	},
})
</script>
<style lang="scss">
.gc-marker-container {
	display: none;
	position: absolute;
}
.gc-marker {
	position: absolute;
	z-index: 99;
}
</style>
