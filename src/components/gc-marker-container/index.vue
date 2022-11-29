<template lang="pug">
.gc-marker-container(ref="markerRef")
	div(:style="{ transform: screen.style }")
		slot
</template>
<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, ref, reactive, PropType, toRefs } from 'vue'
import Screen from '@/core/Screen'
import { PositionItem } from '../../../typings/map'

export default defineComponent({
	name: 'GcMarkerContainer',
	props: {
		item: {
			type: Object as PropType<PositionItem>,
		},
	},
	setup(props: { item: PositionItem }) {
		const markerRef = ref<null | HTMLElement>(null)
		const screen: Screen = Screen.Instance()
		const state = reactive({
			screen,
			instance: undefined,
		})

		const init = () => {
			if (markerRef.value) {
				state.instance = window.map.marker.load(props.item.position, markerRef.value.innerHTML)
			}
		}

		onMounted(() => {
			init()
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
