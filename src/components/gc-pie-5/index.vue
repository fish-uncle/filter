<template lang="pug">
.gc-pie-5.pos-r.fn-flex.flex-column
	.gc-pie-5-chart(ref="chartDom")
	.gc-pie-5-value.pos-a
		h2.font-num.text-center {{ modelValue }}%
	.gc-pie-5-label.fn-flex {{ label }}
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch, onMounted, ref } from 'vue'
import options from './options'

export default defineComponent({
	name: 'GcPie5',
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
				return ['#3CE8FF']
			},
		},
		label: {
			type: String,
			default: '处理率',
		},
		showSize: {
			type: Number,
			default: 3,
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
.gc-pie-5 {
	height: 212px;
	width: 162px;
	align-items: center;
	user-select: none;
	justify-content: center;
	background: linear-gradient(360deg, #00649c 0%, rgba(0, 100, 156, 0) 100%);
}
.gc-pie-5-chart {
	height: 150px;
	width: 150px;
}
.gc-pie-5-label {
	font-weight: 400;
	font-size: 18px;
	color: #ffffff;
	justify-content: center;
}
.gc-pie-5-value {
	height: 110px;
	width: 110px;
	font-weight: 700;
	font-size: 34px;
	left: 50%;
	top: 72px;
	transform: translateX(-50%);
	align-items: center;
	justify-content: center;
	h2 {
		font-weight: 700;
		font-size: 40px;
		color: #ffffff;
		margin-top: 4px;
	}
}
</style>
