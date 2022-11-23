<template lang="pug">
.j-line-4.pos-r
	.legend-box.fn-flex.pos-a
		.unit.pos-a {{ unit }}
	.j-line-4-chart(ref="chartDom")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch, onMounted, ref } from 'vue'
import options from './options'

export default defineComponent({
	name: 'j-line-4',
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
				return []
			},
		},
		color: {
			type: Array,
			default() {
				return ['#8CCBFF']
			},
		},
		unit: {
			type: String,
			default: '件',
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
.j-line-4-chart {
	height: 100%;
	width: 100%;
}
.j-line-4 {
	height: 246px;
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
}
</style>
