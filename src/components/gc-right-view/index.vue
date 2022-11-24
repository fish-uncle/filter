<template lang="pug">
.gc-right-view.pos-a(:class="{ active }")
	slot
</template>
<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, reactive, toRefs } from 'vue'

export default defineComponent({
	name: 'GcRightView',
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
.gc-right-view {
	right: 20px;
	top: 86px;
	transform: translateX(50%) translate3d(0, 0, 0);
	opacity: 0;
	transition: all 0.3s;
	&.active {
		transform: translateX(0) translate3d(0, 0, 0);
		opacity: 1;
	}
}
</style>
