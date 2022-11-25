<template lang="pug">
.gc-pie-1.pos-r.fn-flex(:class="`gc-pie-1-${size}`")
	.gc-pie-1-chart(ref="chartDom")
	.gc-pie-1-value.font-num.pos-a
		span.fn-flex {{ currentRatio }}
	.gc-pie-1-unit.fn-flex.flex-column(@mouseover="mouseover", @mouseleave="mouseleave")
		.gc-pie-1-unit-list(:style="style")
			.gc-pie-1-unit-item.fn-flex.cursor-pointer(
				v-for="(item, index) in currentValue",
				:key="index",
				:class="{ active: index === activeIndex }",
				@click="handlerClick(index)"
			)
				i.pos-r(:style="{ backgroundColor: color[index % color.length] }")
				h2.ellipsis(:style="{ color: color[index % color.length] }") {{ item.label }}
				p.font-num {{ item.value }}
				span {{ unit }}
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch, onMounted, ref, computed, PropType } from 'vue'
import options from './options'

type ModelValueProps = {
	value: number
	label: string
	ratio: number
}
type SizeProps = 'normal' | 'mini'

export default defineComponent({
	name: 'GcPie1',
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
				return ['#63B4FF', '#FCD756', '#00FFCF', '#567CED', '#E5615B', '#3BE8FF']
			},
		},
		unit: {
			type: String,
			default: '户',
		},
		showSize: {
			type: Number,
			default: 5,
		},
		size: {
			type: String as PropType<SizeProps>,
			default: 'normal',
		},
	},
	emits: ['update:modelValue', 'change'],
	setup(props, { emit }) {
		const chartDom = ref<null | HTMLElement>(null)
		const state = reactive({
			currentValue: props.modelValue,
			activeIndex: 0,
			timer: null as any,
		})
		const style = computed(() => {
			if (state.currentValue) {
				if (state.currentValue.length <= props.showSize + 1) {
					return { transform: 'translateY(0px)' }
				} else {
					if (state.activeIndex > props.showSize) {
						const top = (state.activeIndex - props.showSize) * 36
						return { transform: `translateY(-${top}px)` }
					} else {
						return { transform: 'translateY(0px)' }
					}
				}
			}
			return { transform: 'translateY(0px)' }
		})
		const currentRatio = computed(() => {
			if (state.currentValue) {
				if (state.currentValue.length) {
					return `${state.currentValue[state.activeIndex].ratio}%`
				}
			}
			return `0%`
		})
		let myChart: any = null
		watch(
			() => props.modelValue,
			val => {
				state.currentValue = val
				init()
			},
		)
		const mouseleave = () => {
			clearInterval(state.timer)
			if (state.currentValue.length) {
				myChart.setOption(
					options(
						state.currentValue[state.activeIndex].ratio,
						props.color[state.activeIndex % props.color.length],
					),
				)
			}
			state.timer = setInterval(() => {
				if (state.activeIndex >= state.currentValue.length - 1) {
					state.activeIndex = 0
				} else {
					state.activeIndex = state.activeIndex + 1
				}
				myChart.setOption(
					options(
						state.currentValue[state.activeIndex].ratio,
						props.color[state.activeIndex % props.color.length],
					),
				)
			}, 2000)
		}
		const handlerClick = index => {
			state.activeIndex = index
			myChart.setOption(
				options(
					state.currentValue[state.activeIndex].ratio,
					props.color[state.activeIndex % props.color.length],
				),
			)
		}
		const init = () => {
			chartDom.value && !myChart && (myChart = window.echarts.init(chartDom.value))
			mouseleave()
		}
		const mouseover = () => {
			clearInterval(state.timer)
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
			handlerClick,
			currentRatio,
			style,
			mouseover,
			mouseleave,
		}
	},
})
</script>
<style lang="scss" scoped>
.gc-pie-1 {
	height: 246px;
	width: 515px;
	align-items: center;
	user-select: none;
	&.gc-pie-1-normal {
		.gc-pie-1-chart,
		.gc-pie-1-value {
			height: 232px;
			width: 252px;
		}
	}
	&.gc-pie-1-mini {
		.gc-pie-1-chart,
		.gc-pie-1-value {
			height: 145px;
			width: 145px;
		}
	}
}
.gc-pie-1-value {
	font-weight: 700;
	font-size: 34px;
	color: #fff;
	span {
		margin-top: 4px;
		height: 100%;
		width: 80%;
		align-items: center;
		justify-content: center;
	}
}
.gc-pie-1-unit {
	height: 218px;
	flex: 1;
	overflow: hidden;
}
.gc-pie-1-unit-list {
	transition: all 0.3s;
}
.gc-pie-1-unit-item {
	align-items: center;
	justify-content: center;
	width: 100%;
	+ .gc-pie-1-unit-item {
		margin-top: 10px;
	}
	&.active {
		background: rgba(0, 100, 156, 0.4);
	}
	i {
		width: 10px;
		height: 10px;
		transform: rotate(45deg);
		left: 5px;
	}
	h2 {
		height: 28px;
		margin: 0 auto 0 16px;
		font-weight: 400;
		font-size: 18px;
	}
	p {
		font-weight: 700;
		font-size: 18px;
		color: #ffffff;
		margin-top: 4px;
	}
	span {
		font-weight: 400;
		font-size: 14px;
		margin-left: 8px;
		color: #ffffff;
	}
}
</style>
