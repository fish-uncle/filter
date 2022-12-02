<template lang="pug">
.gc-pie-6.pos-r.fn-flex.flex-column
	.gc-pie-6-chart(ref="chartDom")
	.gc-pie-6-value.pos-a.fn-flex.flex-column
		h2.font-num.text-center {{ modelValue }}%
		span {{ label }}
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch, onMounted, ref } from 'vue'
import options from './options'

export default defineComponent({
	name: 'GcPie6',
	props: {
		modelValue: {
			type: Number,
			default() {
				return 0
			},
		},
		color: {
			type: Array,
			default() {
				return ['#023066', '#00DDFF', 'rgba(0, 221, 255, 0.5)']
			},
		},
		label: {
			type: String,
			default: '处理率',
		},
	},
	emits: ['update:modelValue', 'change'],
	setup(props, { emit }) {
		const chartDom = ref<null | HTMLElement>(null)
		const state = reactive({
			currentValue: props.modelValue,
		})
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
<style lang="scss" scoped>
.gc-pie-6 {
	height: 200px;
	width: 200px;
	align-items: center;
	user-select: none;
	justify-content: center;
}
.gc-pie-6-chart {
	height: 200px;
	width: 200px;
}
.gc-pie-6-value {
	height: 200px;
	width: 200px;
	font-weight: 700;
	font-size: 34px;
	left: 50%;
	transform: translateX(-50%);
	align-items: center;
	justify-content: center;
	span {
		font-weight: 400;
		font-size: 20px;
		color: #c0c1c8;
	}
	h2 {
		font-weight: 700;
		font-size: 36px;
		color: #ffffff;
		margin-top: 4px;
	}
}
</style>
