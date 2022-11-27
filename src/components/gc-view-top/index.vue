<template lang="pug">
.gc-view-top.pos-a.fn-flex(:class="{ active }")
	slot
</template>
<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, reactive, toRefs } from 'vue'

export default defineComponent({
	name: 'GcViewTop',
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
.gc-view-top {
	top: 117px;
	justify-content: center;
	pointer-events: none;
	width: 100%;
	left: 0;
	opacity: 0;
	transition: all 0.3s;
	transform: translateY(-100%) translate3d(0, 0, 0);
	&.active {
		transform: translateY(0) translate3d(0, 0, 0);
		opacity: 1;
	}
}
</style>
