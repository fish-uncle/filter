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
	.gc-pie-2-value.pos-a.fn-flex.flex-column
		h1.pos-a
		h2.pos-a
		h3.pos-a
		h4.pos-a
			label.pos-a {{ currentLabel }}
			span.pos-a {{ currentRatio }}
		ul.pos-a
			p.pos-a(v-for="(item, index) in ringIconList", :key="index", :style="{ transform: `rotate(${7.2 * index}deg)` }")
	.gc-pie-2-chart(ref="chartDom")
	.gc-pie-2-img-box.pos-a
		img.pos-a(:src="icon[activeIndex % icon.length]")
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
		icon: {
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
			ringIconList: new Int8Array(50),
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
.gc-pie-2-img-box {
	z-index: 9;
	left: 178px;
	img {
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		width: 34px;
		height: 34px;
	}
}
.gc-pie-2-chart,
.gc-pie-2-value,.gc-pie-2-img-box {
	height: 180px;
	width: 180px;
	margin-left: 51px;
}
.gc-pie-2-value {
	font-weight: 700;
	font-size: 34px;
	left: 178px;
	align-items: center;
	justify-content: center;
	h1 {
		width: 130px;
		height: 130px;
		border-radius: 130px;
		box-shadow: 0 0 0 30px rgba(255, 255, 255, 0.1);
		left: 50%;
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
	}
	h2 {
		width: 112px;
		height: 112px;
		border-radius: 112px;
		left: 50%;
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
		background: #011730;
		border: 1px solid rgba(59, 232, 255, 0.5);
	}
	h3 {
		width: 68px;
		height: 68px;
		left: 50%;
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
		content: '';
		background: rgba(59, 232, 255, 0.2);
		border-radius: 68px;
	}
	h4 {
		width: 5px;
		height: 5px;
		border-radius: 5px;
		background: #ffffff;
		top: 32px;
		right: 32px;
		color: #ffffff;
		&:before,
		&:after {
			content: '';
			position: absolute;
			background-color: rgba(255, 255, 255, 0.4);
			height: 1px;
		}
		&:before {
			top: -8px;
			right: -35px;
			width: 40px;
			transform: rotate(-30deg);
		}
		&:after {
			top: -18px;
			right: -132px;
			width: 100px;
		}
		span {
			top: -15px;
			right: -132px;
			font-weight: 400;
			font-size: 18px;
			width: 100px;
			white-space: nowrap;
		}
		label {
			top: -55px;
			right: -132px;
			font-weight: 700;
			font-size: 24px;
			width: 100px;
			white-space: nowrap;
		}
	}
	ul {
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		width: 160px;
		height: 160px;

		p {
			left: 50%;
			width: 4px;
			height: 6px;
			background-color: rgba(255, 255, 255, 0.4);
			transform-origin: 0 80px;
		}
	}
}
.gc-pie-2-unit {
	height: 224px;
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
	border-radius: 6px;
	background: rgba(0, 100, 156, 0.1);
	border: 1px solid transparent;
	transition: all 0.3s;
	+ .gc-pie-2-unit-item {
		margin-top: 8px;
	}
	&.active {
		background: rgba(0, 100, 156, 0.6);
		box-shadow: inset 0 0 4px #00ddff;
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
