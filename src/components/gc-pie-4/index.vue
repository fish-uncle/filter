<template lang="pug">
.gc-pie-4.pos-r.fn-flex(:class="`gc-pie-4-${size}`")
	.gc-pie-4-chart(ref="chartDom")
	.gc-pie-4-value.pos-a.fn-flex.flex-column
		h2.font-num {{ currentRatio }}
		ul.pos-a
			p.pos-a(v-for="(item, index) in ringIconList", :key="index", :style="{ transform: `rotate(${4.5 * index}deg)` }")
	.gc-pie-4-unit.fn-flex.flex-column(@mouseover="mouseover", @mouseleave="mouseleave")
		.gc-pie-4-unit-list(:style="style")
			.gc-pie-4-unit-item.fn-flex.cursor-pointer(
				v-for="(item, index) in currentValue",
				:key="index",
				:class="{ active: index === activeIndex }",
				@click="handlerClick(index)"
			)
				i.pos-r(:style="{ backgroundColor: color[index % color.length] }")
				h2.ellipsis {{ item.label }}
				p.font-num {{ item.value }}
				h3 {{ unit }}
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
	name: 'GcPie4',
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
				return ['#3C72FD', '#00FFCF', '#FF902A']
			},
		},
		unit: {
			type: String,
			default: '户',
		},
		showSize: {
			type: Number,
			default: 3,
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
			ringIconList: new Int8Array(80),
		})
		const style = computed(() => {
			if (state.currentValue) {
				if (state.currentValue.length <= props.showSize + 1) {
					return { transform: 'translateY(0px)' }
				} else {
					if (state.activeIndex > props.showSize) {
						const top = (state.activeIndex - props.showSize) * 28
						return { transform: `translateY(-${top}px)` }
					} else {
						return { transform: 'translateY(0px)' }
					}
				}
			}
			return { transform: 'translateY(0px)' }
		})
		const currentLabel = computed(() => {
			if (state.currentValue) {
				if (state.currentValue.length) {
					return `${state.currentValue[state.activeIndex].label}`
				}
			}
			return ''
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
				myChart.dispatchAction({
					type: 'highlight',
					seriesIndex: 0,
					dataIndex: (state.activeIndex % state.currentValue.length) * 2,
				})
			}, 2000)
		}
		const handlerClick = index => {
			state.activeIndex = index
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
			myChart.setOption(options(state.currentValue, props))
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
			currentLabel,
			currentRatio,
			style,
			mouseover,
			mouseleave,
		}
	},
})
</script>
<style lang="scss" scoped>
.gc-pie-4 {
	height: 246px;
	align-items: center;
	user-select: none;
	&.gc-pie-4-normal {
		width: 515px;
		.gc-pie-4-chart,
		.gc-pie-4-value {
			height: 232px;
			width: 252px;
		}
	}
	&.gc-pie-4-mini {
		width: 438px;
		height: 200px;
		.gc-pie-4-chart,
		.gc-pie-4-value {
			height: 155px;
			width: 155px;
			&:before{
				width: 70px;
				height: 70px;
			}
			h2{
				font-size: 30px;
			}
			ul{
				width: 100px;
				height: 100px;
			}
			p{
				top: 0;
				transform-origin: 0 50px;
			}
		}
	}
}
.gc-pie-4-value {
	font-weight: 700;
	font-size: 34px;
	left: 0;
	align-items: center;
	justify-content: center;
	&:before {
		content: '';
		position: absolute;
		background: rgba(99, 180, 255, 0.15);
		width: 120px;
		height: 120px;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		border-radius: 120px;
	}
	h2 {
		font-weight: 700;
		font-size: 38px;
		color: #ffffff;
		margin-top: 4px;
	}
	ul {
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		width: 150px;
		height: 150px;

		p {
			left: 50%;
			width: 3px;
			height: 6px;
			margin-left: -1px;
			background-color: rgba(255, 255, 255, 0.2);
			transform-origin: 0 75px;
		}
	}
}
.gc-pie-4-unit {
	flex: 1;
	overflow: hidden;
	align-items: center;
	margin-left: 43px;
}
.gc-pie-4-unit-list {
	transition: all 0.3s;
	width: 100%;
}
.gc-pie-4-unit-item {
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 28px;
	transition: all 0.3s;
	padding: 0 14px 0 8px;
	+ .gc-pie-4-unit-item {
		margin-top: 4px;
	}
	&.active {
		background: rgba(141, 214, 255, 0.1);
	}
	i {
		width: 10px;
		height: 10px;
		transform: rotate(45deg);
		left: 5px;
	}
	h2 {
		font-weight: 400;
		font-size: 18px;
		margin: 0 auto 0 16px;
		color: rgba(255, 255, 255, 0.75);
	}
	p {
		font-weight: 700;
		font-size: 18px;
		color: rgba(255, 255, 255, 0.75);
		margin-top: 4px;
	}
	h3 {
		font-weight: 400;
		font-size: 14px;
		color: rgba(255, 255, 255, 0.75);
		margin-left: 8px;
	}
}
</style>
