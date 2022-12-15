<template lang="pug">
.gc-marker-mapbox-container(ref="markerRef")
	slot
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, reactive, PropType, toRefs, watch, onBeforeUnmount } from 'vue'

interface PositionProps {
	latitude: number
	longitude: number
	height?: number
}
export default defineComponent({
	name: 'GcMarkerMapboxContainer',
	props: {
		position: {
			type: Object as PropType<PositionProps>,
		},
	},
	setup(props) {
		const markerRef = ref<null | HTMLElement>(null)
		const state = reactive({
			instance: undefined,
		})

		watch(
			() => props.position,
			() => {
				;(state.instance as any).setLngLat([props.position?.longitude, props.position?.latitude])
			},
			{ deep: true },
		)

		const init = () => {
			if (markerRef.value) {
				state.instance = new window.mapboxgl.Marker(markerRef.value)
					.setLngLat([props.position?.longitude, props.position?.latitude])
					.addTo(window.map.viewer)
			}
		}
		onBeforeUnmount(() => {
			if (state.instance) {
				;(state.instance as any).remove()
			}
		})

		onMounted(() => {
			init()
		})

		return {
			...toRefs(state),
			markerRef,
		}
	},
})
</script>
