<template lang="pug">
.gc-view-left.pos-a(:class="{ active }")
	slot
</template>
<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, reactive, toRefs } from 'vue'

export default defineComponent({
	name: 'GcViewLeft',
	setup() {
		const state = reactive({
			active: false,
		})
		onMounted(() => {
			state.active = true
		})
		onBeforeUnmount(() => {
			state.active = false
		})
		return {
			...toRefs(state),
		}
	},
})
</script>
<style lang="scss" scoped>
.gc-view-left {
	left: 20px;
	top: 78px;
	transform: translateX(-50%) translate3d(0, 0, 0);
	opacity: 0;
	transition: all 0.3s;
	padding: 12px 12px 24px 12px;
	&:before {
		width: 100%;
		height: 100%;
		background: rgba(0, 18, 38, 0.5);
		box-shadow: 0 0 12px rgba(38, 242, 255, 0.2);
		backdrop-filter: blur(10px);
		content: '';
		position: absolute;
		z-index: -1;
		left: 0;
		top: 0;
		border-radius: 8px;
	}
	&.active {
		transform: translateX(0) translate3d(0, 0, 0);
		opacity: 1;
	}
}
</style>
