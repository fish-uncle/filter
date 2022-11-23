<template lang="pug">
.j-line-3.pos-r
	.legend-box.fn-flex.pos-a
		.unit.pos-a {{ unit }}
		.legend.fn-flex
			.legend-item.fn-flex(v-for="(item, index) in legend")
				.legend-block(:style="`background-color:${color[index]};`")
				.legend-desc {{ item }}
	.j-line-3-chart(ref="chartDom")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch, onMounted, ref } from 'vue'
import options from './options'

export default defineComponent({
	name: 'JLine3',
	props: {
		right: {
			type: Number,
			default: 0,
		},
		left: {
			type: Number,
			default: 0,
		},
		modelValue: {
			type: Array,
			default() {
				return []
			},
		},
		legend: {
			type: Array,
			default() {
				const curYear = new Date().getFullYear()
				return [curYear - 1 + '年', curYear + '年']
			},
		},
		color: {
			type: Array,
			default() {
				return ['#63B4FF', '#2BFDB1']
			},
		},
		unit: {
			type: String,
			default: '台',
		},
	},
	emits: ['update:modelValue', 'change'],
	setup(props, { emit }) {
		const chartDom = ref<null | HTMLElement>(null)
		const state = reactive({ currentValue: props.modelValue })
		let myChart: any = null
		watch(
			() => props.modelValue,
			val => {
				state.currentValue = val
				init()
			},
			{deep:true}
		)
		const init = () => {
			chartDom.value && !myChart && (myChart = window.echarts.init(chartDom.value))
			myChart.setOption(options(state.currentValue, props))
		}
		onMounted(() => {
			init()
		})
		const handleChange = val => {
			emit('update:modelValue', val)
			emit('change', val)
		}
		return {
			chartDom,
			...toRefs(state),
			handleChange,
		}
	},
})
</script>
<style lang="scss" scoped>
.j-line-3-chart {
	height: 100%;
	width: 100%;
}
.j-line-3 {
	height: 200px;
	width: 100%;
}
.legend-box {
	top: 0;
	left: 0;
	align-items: center;
	width: 100%;
	height: 16px;
	padding: 0 10px;

	.unit {
		width: 30px;
		left: 0;
		top: 0;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 22px;
		color: rgba(255, 255, 255, 0.75);
		text-align: right;
		white-space: nowrap;
	}

	.legend {
		align-items: center;
		justify-content: center;
		width: 100%;

		.legend-item {
			align-items: center;
			margin-left: 16px;
			&:first-child {
				margin-left: 0;
			}
		}

		.legend-block {
			width: 24px;
			height: 4px;
		}

		.legend-desc {
			margin-left: 8px;
			font-size: 16px;
			line-height: 16px;
			color: #fff;
		}
	}
}
</style>
