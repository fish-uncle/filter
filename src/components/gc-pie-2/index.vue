<template lang="pug">
.gc-pie-2.pos-r.fn-flex
	.gc-pie-2-unit.fn-flex.flex-column(@mouseover="mouseover", @mouseleave="mouseleave")
		.gc-pie-2-unit-list(:style="style")
			.gc-pie-2-unit-item.fn-flex.cursor-pointer(
				v-for="(item, index) in currentValue",
				:key="index",
				:class="{ active: index === activeIndex }",
				@click="handlerClick(index)"
			)
				h2.ellipsis {{ item.label }}
				p.font-num {{ item.value }}
	.gc-pie-2-chart(ref="chartDom")
	.gc-pie-2-value.pos-a.fn-flex.flex-column
		h2.font-num {{ currentRatio }}
		h3 {{ currentLabel }}
		ul.pos-a
			p.pos-a(v-for="(item, index) in icon", :key="index", :style="{ transform: `rotate(${7.2 * index}deg)` }")
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
	name: 'GcPie2',
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
				return ['#00FFCF']
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
	},
	emits: ['update:modelValue', 'change'],
	setup(props, { emit }) {
		const chartDom = ref<null | HTMLElement>(null)
		const state = reactive({
			currentValue: props.modelValue,
			activeIndex: 0,
			timer: null as any,
			icon: new Int8Array(50),
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
			return `0%`
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
.gc-pie-2 {
	height: 246px;
	width: 515px;
	align-items: center;
	user-select: none;
}
.gc-pie-2-chart,
.gc-pie-2-value {
	height: 232px;
	width: 252px;
	margin-left: 97px;
}
.gc-pie-2-value {
	font-weight: 700;
	font-size: 34px;
	right: 0;
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
		margin-bottom: 12px;
	}
	h3 {
		font-weight: 400;
		font-size: 14px;
		color: #ffffff;
	}
	ul {
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		width: 160px;
		height: 160px;

		p {
			top: 4%;
			left: 50%;
			width: 4px;
			height: 6px;
			margin-left: -1px;
			background-color: rgba(255, 255, 255, 0.2);
			transform-origin: 0 74px;
		}
	}
}
.gc-pie-2-unit {
	height: 224px;
	flex: 1;
	width: 178px;
	overflow: hidden;
}
.gc-pie-2-unit-list {
	transition: all 0.3s;
}
.gc-pie-2-unit-item {
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 50px;
	padding: 14px 12px;
	border-radius: 2px;
	background: rgba(0, 100, 156, 0.4);
	border: 1px solid transparent;
	transition: all 0.3s;
	+ .gc-pie-2-unit-item {
		margin-top: 8px;
	}
	&.active {
		border: 1px solid #3be8ff;
		background: #004483;
		p {
			color: #3be8ff;
		}
	}
	h2 {
		font-weight: 400;
		font-size: 16px;
		color: rgba(255, 255, 255, 0.75);
	}
	p {
		font-weight: 700;
		font-size: 20px;
		color: rgba(255, 255, 255, 0.75);
		margin-top: 4px;
		margin-left: auto;
	}
}
</style>
