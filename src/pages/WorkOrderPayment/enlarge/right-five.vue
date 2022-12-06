<template lang="pug">
.fn-flex.flex-column
	.fn-flex
		gc-tab5(:options="personasOptions", @init="init", @change="init")
	.pos-r
		.enlarge-right-five-animation.pos-a.fn-flex
			video(v-bind:muted.attr="''", :src="video", autoplay="autoplay", loop="loop")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { personasOptions } from '@/config'

const video = require('@/imgs/workorder-payment/right-five/video.webm')
export default defineComponent({
	name: 'EnlargeRightFive',
	setup() {
		const state = reactive({
			personasOptions,
			video,
		})
		const init = () => {}
		return {
			...toRefs(state),
			init,
		}
	},
})
</script>
<style lang="scss" scoped>
.enlarge-right-five-animation {
	align-items: center;
	justify-content: center;
	width: 452px;
	height: 364px;
	left: 50%;
	transform: translateX(-50%);
	video {
		width: 262px;
		height: 262px;
	}
}
</style>
