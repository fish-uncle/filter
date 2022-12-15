<template lang="pug">
gc-marker-mapbox-container(v-for="(item, index) in list", :key="index", v-bind="item")
	.custom-service-map-marker-1.fn-flex.flex-column.pos-r
		.custom-service-map-marker-1-top(v-if="show[index]")
			h2.fn-flex {{ item.label }}
			.custom-service-map-marker-1-top-item.fn-flex
				label 总客户：
				span {{ item.value1 }}户
			.custom-service-map-marker-1-top-item.fn-flex
				label 待发展客户：
				span {{ item.value2 }}户
			.custom-service-map-marker-1-top-item.fn-flex
				label 营收金额
				span {{ item.value3 }}万
		p.pos-r(v-if="show[index]")
		img.cursor-pointer.pos-a(:src="icon", v-marker-click="handlerClick(index)")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import { MarkerClick } from '@/directives'

const icon = require('@/imgs/map/marker1.png')

export default defineComponent({
	name: 'MapMarker',
	directives: {
		MarkerClick,
	},
	setup() {
		const state = reactive({
			list: [] as any[],
			show: [] as boolean[],
			icon,
		})
		const handlerClick = index => {
			return () => {
				state.show[index] = !state.show[index]
			}
		}
		const init = () => {
			setTimeout(() => {
				state.list = [
					{
						label: '惠民街道',
						value1: 100,
						value2: 100,
						value3: 100,
						position: {
							latitude: 30.84521190078773,
							longitude: 120.92005076856685,
						},
					},
					{
						label: '惠民街道',
						value1: 100,
						value2: 100,
						value3: 100,
						position: {
							latitude: 30.778136002630816,
							longitude: 120.96799907714902,
						},
					},
				]
			})
		}
		onMounted(() => {
			init()
		})
		return {
			...toRefs(state),
			handlerClick,
		}
	},
})
</script>
<style lang="scss" scoped>
.custom-service-map-marker-1-top-item {
	padding: 0 9px;
	margin-top: 14px;
	label {
		font-weight: 400;
		font-size: 18px;
		color: rgba(255, 255, 255, 0.75);
	}
	span {
		font-weight: 400;
		font-size: 18px;
		color: #ffffff;
		margin-left: auto;
	}
}
.custom-service-map-marker-1-top {
	background: rgba(0, 18, 38, 0.8);
	border: 1px solid #3be8ff;
	box-shadow: 0 0 7px #26f2ff;
	padding-bottom: 13px;
	width: 262px;
	align-items: center;
	justify-content: center;

	h2 {
		background: rgba(0, 100, 156, 0.4);
		border: 2px solid #3be8ff;
		height: 36px;
		padding: 4px 8px;
		align-items: center;
		color: #ffffff;
	}
}
.custom-service-map-marker-1 {
	user-select: none;
	align-items: center;
	justify-content: center;
	height: 300px;
	padding-bottom: 60px;
	p {
		width: 2px;
		height: 70px;
		background: #ffffff;
		&:before {
			content: '';
			position: absolute;
			bottom: 0;
			width: 14px;
			height: 14px;
			background: #ffffff;
			left: 50%;
			transform: translateX(-50%);
			border-radius: 14px;
		}
	}
	img {
		width: 60px;
		height: 60px;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}
}
</style>
