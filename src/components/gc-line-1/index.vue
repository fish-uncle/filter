<template lang="pug">
.gc-line-1.pos-r
	.gc-line-1-unit.fn-flex.pos-a
		.unit-left.pos-a {{ unit }}
	.gc-line-1-chart(ref="chartDom")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch, onMounted, ref } from 'vue'
import options from './options'

export default defineComponent({
	name: 'GcLine1',
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
		color: {
			type: Array,
			default() {
				return ['#3BE8FF']
			},
		},
		unit: {
			type: String,
			default: '%',
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
			...toRefs(state),
			chartDom,
			handleChange,
		}
	},
})
</script>
<style lang="scss">
.gc-line-1-legend {
	width: 8px;
	height: 8px;
	margin-right: 9px;
	background: #3be8ff;
	border-radius: 1px;
	display: inline-block;
}
.gc-line-1-chart {
	div:nth-child(2) {
		box-shadow: none !important;
		border-radius: 2px !important;
		display: flex !important;
		align-items: center;
		justify-content: center;
		background-color: rgba(255, 255, 255, 0.2) !important;
		border: none !important;
		padding: 0 4px !important;
		font-family: 'font-num' !important;
		font-size: 12px !important;
		color: #ffffff !important;
		span {
			margin-top: 4px;
			font-weight: 700;
			line-height: 14px;
		}
		div {
			display: none;
		}
	}
}
</style>
<style lang="scss" scoped>
.gc-line-1-chart {
	height: 220px;
	width: 393px;
}
.gc-line-1 {
	height: 246px;
	width: 393px;
}
.gc-line-1-unit {
	top: 0;
	left: 0;
	align-items: center;
	width: 100%;
	height: 16px;
	padding: 0 10px;

	.unit-left {
		width: 30px;
		left: 0;
		top: 0;
		font-weight: 400;
		font-size: 14px;
		line-height: 16px;
		color: #c0c1c8;
		text-align: right;
		white-space: nowrap;
	}
}
</style>
