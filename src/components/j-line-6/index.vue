<template lang="pug">
.j-line-6.pos-r
	.legend-box.fn-flex.pos-a
		.unit.pos-a {{ unit }}
		.legend.fn-flex
			.legend-item.fn-flex(v-for="(item, index) in legend")
				.legend-block(:style="`background-color:${color[index]};`")
				.legend-desc {{ item }}
	.j-line-6-chart(ref="chartDom")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch, onMounted, ref } from 'vue'
import options from './options'

export default defineComponent({
	name: 'j-line-6',
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
				return ['2021年', '2022年']
			},
		},
		icon: {
			type: Array,
			default: [
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEySURBVHgBhVFLTgJREKx+6H68Ad4ATwCcxFExcQesDfAGDyBuDSQzJwFOIDfQIxB1OTNt9ZtH4mISOnk9SU/1p6oEMSZek98aYygGEL4mDg5YvS+lOOGcpSev3Z8aHwFcIysdrtZLEVSYVsDwYa6fhjGsWLKCKIr1i3i0xGimXgW31Tdu5HGmae3Q32RyZz9VdWEXRmwuItPYtOVn79g55vIigl/5sS1JfBPWmq08lblvHHprL7s4MW25aGypvMTBxAik04kmOBO5l2OjkmJ3kaAX628t2HDu6FkHaGTGnvIZUZCgj03H+DLWggDkmio9kZSGdegB9c2pfdZ2zmiuC4LTzVKugw9s6rJpa+dJh35QhOA8BbHtnN6tHIbk8SX/J93TEydBlYYTB9jJZQerE+k/WTZ8dkfxgdYAAAAASUVORK5CYII=',
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADWSURBVHgBhVKBEYIwDGyZADdgBNkAJpENPCegTgBOoEwCDqC4gW6AG9T/klZO4cjdp23yyX1y1cqb7WP4PZAJaA+gVjptPC0ScgLfC/EIbEDSOA9I5sg/hRO6M2DUkjE3cmI+CuAcctaWwCCoJkWtsjfDSw9kQq7svxkpyFwRnJ10H2YKhrAUcKPwWDOdvv2WOmAr4dMMtQmS3Jo5iNMWZNWToc136PsFvJ3XxpWVasmYI4fKJJDAtyKvgd5O5qJUNmI+R/ylfzoVavwefiY2uKrxe7ihP67YreYE6QZkAAAAAElFTkSuQmCC',
			],
		},
		color: {
			type: Array,
			default() {
				return ['#647EFF', '#2BFDB1']
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
			chartDom,
			...toRefs(state),
			handleChange,
		}
	},
})
</script>
<style lang="scss" scoped>
.j-line-6-chart {
	height: 100%;
	width: 100%;
}
.j-line-6 {
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
