<template lang="pug">
.gc-pie-7.pos-r.fn-flex
	.gc-pie-7-chart(ref="chartDom")
	.gc-pie-7-value.font-num.pos-a
		span.fn-flex {{ currentRatio }}
		ul.pos-a
			p.pos-a(v-for="(item, index) in ringIconList", :key="index", :style="{ transform: `rotate(${4.5 * index}deg)` }")
	.gc-pie-7-unit.fn-flex.flex-column(@mouseover="mouseover", @mouseleave="mouseleave")
		.gc-pie-7-unit-list(:style="style")
			.gc-pie-7-unit-item.fn-flex.cursor-pointer(
				v-for="(item, index) in currentValue",
				:key="index",
				:class="{ active: index === activeIndex }",
				@click="handlerClick(index)"
			)
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

export default defineComponent({
	name: 'GcPie7',
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
				return ['#FFFFFF', '#D5C847', '#3BE8FF', '#3C72FD', '#63B4FF']
			},
		},
		unit: {
			type: String,
			default: '户',
		},
		showSize: {
			type: Number,
			default: 4,
		},
	},
	emits: ['update:modelValue', 'change'],
	setup(props, { emit }) {
		const chartDom = ref<null | HTMLElement>(null)
		const state = reactive({
			currentValue: props.modelValue,
			activeIndex: 0,
			timer: null as any,
			ringIconList: new Int8Array(80),
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
				myChart.setOption(options(state.currentValue, props))
				myChart.dispatchAction({
					type: 'highlight',
					seriesIndex: 0,
					dataIndex: (state.activeIndex % state.currentValue.length) * 2,
				})
			}
			state.timer = setInterval(() => {
				myChart.dispatchAction({
					type: 'downplay',
					seriesIndex: 0,
					dataIndex: (state.activeIndex % state.currentValue.length) * 2,
				})
				if (state.activeIndex >= state.currentValue.length - 1) {
					state.activeIndex = 0
				} else {
					state.activeIndex = state.activeIndex + 1
				}
				myChart.setOption(options(state.currentValue, props))
				myChart.dispatchAction({
					type: 'highlight',
					seriesIndex: 0,
					dataIndex: (state.activeIndex % state.currentValue.length) * 2,
				})
			}, 2000)
		}
		const handlerClick = index => {
			state.activeIndex = index
			myChart.setOption(options(state.currentValue, props))
			// @ts-ignore
			state.currentValue.map((item, index) => {
				myChart.dispatchAction({
					type: 'downplay',
					seriesIndex: 0,
					dataIndex: (index % state.currentValue.length) * 2,
				})
			})
			myChart.dispatchAction({
				type: 'highlight',
				seriesIndex: 0,
				dataIndex: (state.activeIndex % state.currentValue.length) * 2,
			})
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
.gc-pie-7 {
	height: 216px;
	width: 403px;
	align-items: center;
	user-select: none;
	.gc-pie-7-chart,
	.gc-pie-7-value {
		height: 180px;
		width: 180px;
	}
}
.gc-pie-7-value {
	font-weight: 700;
	font-size: 34px;
	color: #fff;
	&:before {
		content: '';
		position: absolute;
		width: 180px;
		height: 180px;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		border-radius: 180px;
		border: 1px solid rgba(255, 255, 255, 0.2);
	}
	&:after {
		content: '';
		position: absolute;
		width: 134px;
		height: 134px;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		border-radius: 120px;
		border: 1px solid rgba(255, 255, 255, 0.2);
		box-shadow: 0 0 0 23px rgba(255, 255, 255, 0.05);
	}
	span {
		margin-top: 4px;
		height: 100%;
		width: 100%;
		align-items: center;
		justify-content: center;
	}
	ul {
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		width: 110px;
		height: 110px;

		p {
			top: 0;
			left: 50%;
			width: 2px;
			height: 4px;
			background-color: rgba(255, 255, 255, 0.2);
			transform-origin: 0 55px;
		}
	}
}
.gc-pie-7-unit {
	height: 216px;
	flex: 1;
	overflow: hidden;
	justify-content: center;
	margin-left: 23px;
}
.gc-pie-7-unit-list {
	transition: all 0.3s;
}
.gc-pie-7-unit-item {
	align-items: center;
	width: 100%;
	height: 28px;
	padding: 0 10px;
	+ .gc-pie-7-unit-item {
		margin-top: 2px;
	}
	&.active {
		background: rgba(0, 100, 156, 0.4);
	}
	h2 {
		font-weight: 400;
		font-size: 18px;
		margin-right: auto;
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
