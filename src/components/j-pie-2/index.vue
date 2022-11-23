<template lang="pug">
.j-pie-2.pos-r.fn-flex
	.j-pie-2-chart(ref="chartDom")
	h2.font-num.pos-a.fn-flex {{ current && current.alarmRate ? current.alarmRate + '%' : '--' }}
	j-marquee(:list="list", v-model="currentIndex", style="margin-left: 20px; flex: 1")
		template(#marqueeItem="{ item, index, color }")
			.j-pie-2-item.fn-flex(:class="index === currentIndex ? 'active' : ''")
				.icon(:style="`background-color: ${color}`")
				.name {{ item.eventName }}
				.value
					| {{ item.alarmRate }}
					span.unit {{ unit }}
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch, onMounted, ref, computed } from 'vue'
import options from './options'

export default defineComponent({
	name: 'JPie2',
	props: {
		unit: {
			type: String,
			default: '%',
		},
		list: {
			type: Array,
			default() {
				return []
			},
		},
	},
	emits: ['update:modelValue', 'change'],
	setup(props) {
		const chartDom = ref<null | HTMLElement>(null)
		const state = reactive({
			currentIndex: 0,
		})
		const current: any = computed(() => {
			return props.list[state.currentIndex]
		})
		const colorMap = ['#63B4FF', '#FCD756', '#2BFDB1', '#3058D0']
		let myChart: any = null
		watch(
			() => props.list,
			() => {
				init()
				state.currentIndex = 0
			},
		)
		watch(
			() => state.currentIndex,
			() => {
				init()
			},
		)
		const init = () => {
			chartDom.value && !myChart && (myChart = window.echarts.init(chartDom.value))
			myChart.setOption(options(current.value?.alarmRate || 0, colorMap[state.currentIndex % 4])) //if (current.value)
		}
		onMounted(() => {
			init()
		})
		return {
			chartDom,
			current,
			...toRefs(state),
		}
	},
})
</script>
<style lang="scss" scoped>
.j-pie-2-item {
	align-items: center;
	line-height: 28px;
	height: 28px;
	padding: 0 6px 0 7px;
	overflow: hidden;
	&.active {
		background: rgba(99, 180, 255, 0.4);
	}
	.icon {
		width: 10px;
		height: 10px;
		transform: rotate(-45deg);
		transform-origin: center;
	}
	.name {
		flex: 1;
		margin-left: 6.86px;
		font-weight: 400;
		font-size: 18px;
		line-height: 28px;
		color: #ffffff;
	}
	.value {
		font-weight: 400;
		font-size: 18px;
		color: #ffffff;
		.unit {
			padding-left: 6px;
			font-weight: 400;
			font-size: 14px;
			color: #ffffff;
		}
	}
}
.j-pie-2-chart {
	height: 146px;
	width: 146px;
}
.j-pie-2 {
	width: 380px;
	align-items: center;
	h2 {
		width: 146px;
		height: 146px;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 28px;
		color: #ffffff;
	}
}
</style>
