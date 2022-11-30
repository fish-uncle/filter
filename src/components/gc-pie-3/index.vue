<template lang="pug">
.gc-pie-3.pos-r.fn-flex
	.gc-pie-3-chart(ref="chartDom")
	.gc-pie-3-unit.fn-flex.flex-column
		.gc-pie-3-unit-item.fn-flex(v-for="(item, index) in currentValue", :key="index")
			i(:style="{ backgroundColor: color[index % color.length] }")
			h2.ellipsis {{ item.label }}
			p.font-num {{ item.value }}
			span {{ unit }}
	.gc-pie-3-value.pos-a
		.gc-pie-3-value-list
			.gc-pie-3-value-item.fn-flex(v-for="(item, index) in currentValue", :key="index")
				span(:style="{borderColor:color[index%color.length]}")
				h2 {{item.ratio}}%
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch, onMounted, ref, PropType } from 'vue'
import options from './options'

type ModelValueProps = {
	value: number
	label: string
	ratio: number
}

export default defineComponent({
	name: 'GcPie3',
	props: {
		modelValue: {
			type: Array as PropType<ModelValueProps[]>,
			default() {
				return []
			},
		},
		color: {
			type: Array,
			default() {
				return ['#1774FF', '#50ACF7', '#00FFCF', '#FCE07C']
			},
		},
		unit: {
			type: String,
			default: '户',
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
.gc-pie-3 {
	width: 515px;
	align-items: center;
	user-select: none;
}
.gc-pie-3-value {
	height: 232px;
	width: 252px;
	left: 0;
	top: 0;
}
.gc-pie-3-value-item{
	align-items: center;
	margin-left: 4px;
	+.gc-pie-3-value-item{
		margin-top: 1px;
	}
	span{
		border-width: 0 0 1px 0;
		border-style: dashed;
		width: 40px;
		height: 0;
	}
	h2{
		font-weight: 400;
		font-size: 14px;
		line-height: 16px;
		color: rgba(255, 255, 255, 0.75);
		margin-left: 4px;
	}
}
.gc-pie-3-value-list{
	margin-left: 50%;
	width: 50%;
	margin-top: 10%;
	height: 100%;
}
.gc-pie-3-chart {
	height: 232px;
	width: 252px;
	margin-right: auto;
}
.gc-pie-3-unit {
	width: 234px;
}
.gc-pie-3-unit-item {
	align-items: center;
	justify-content: center;
	height: 32px;
	padding: 4px 8px 4px 5px;
	i {
		width: 12px;
		height: 12px;
		margin-right: 10px;
		border-radius: 1px;
	}
	h2 {
		font-weight: 400;
		font-size: 18px;
		color: #ffffff;
	}
	p {
		font-weight: 700;
		font-size: 18px;
		color: #ffffff;
		margin-top: 4px;
		margin-left: auto;
	}
	span {
		font-weight: 400;
		font-size: 14px;
		color: rgba(255, 255, 255, 0.75);
		margin-left: 8px;
	}
}
</style>
