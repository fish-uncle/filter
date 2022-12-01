<template lang="pug">
.gc-line-2.pos-r
	.gc-line-2-unit.fn-flex.pos-a
		.unit-left.pos-a {{ unit }}
	.gc-line-2-chart(ref="chartDom")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch, onMounted, ref } from 'vue'
import options from './options'

export default defineComponent({
	name: 'GcLine2',
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
				return ['类目一', '类目二', '类目三']
			},
		},
		color: {
			type: Array,
			default() {
				return ['#3C72FD', '#00FFCF', '#FCD756']
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
.gc-line-2-tooltip {
	box-shadow: none !important;
	border-radius: 2px !important;
	display: flex !important;
	flex-direction: column !important;
	border: none !important;
	padding: 2px 2px 2px 4px !important;
	font-size: 12px !important;
	background-color: #02142D !important;
	p {
		align-items: center;
		i {
			width: 4px;
			height: 4px;
			margin-right: 5px;
		}
	}
	span {
		font-weight: 600;
		line-height: 14px;
	}
	div {
		display: none;
	}
}
</style>
<style lang="scss" scoped>
.gc-line-2-chart {
	height: 220px;
	width: 515px;
}
.gc-line-2 {
	height: 246px;
	width: 515px;
}
.gc-line-2-unit {
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
