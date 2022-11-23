<template lang="pug">
.j-line-5.pos-r
	.legend-box.fn-flex.pos-a
		.unit.pos-a {{ unit }}
	.j-line-5-chart(ref="chartDom")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch, onMounted, ref } from 'vue'
import options from './options'

export default defineComponent({
	name: 'j-line-5',
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
				return []
			},
		},
		icon: {
			type: String,
			default:
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAYAAADUFP50AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIGSURBVHgBnZLfaxNBEMdnZu9yV9pr0CRqAoIPVqhUjeSp2GqI0AdREN988z8Q/Av8V/wPhBYfKtJaWyIixB+gWArNU0KIF0vTaG7vMuNuiqG15sWBY2939jOz8+UL8J+BRzfy4qIXnz0/J5hcQKWmgMUT4RAYt1P9QR0XtronQPl6O6N1soQsASE3tKaOozhigAKRygtBN5X6tYqz78IRKJs3gjhwHwiIjlLO6vTsq3BUUJ5CuPUyCALnLjJ7rh8tW3gIRh9vPbTrfjdZyU66KiF+zAKPTHLPoDVX1JOwFw8sLAkc+KXXyyjvF/OxwnuMvO4XN7f1h5s1U6N4XApZc51zFd1vXUGF87EkKxSjFGzKczr1qLZ4/yQ0nKjcj5vllH/mm905rDJGBwiIsItzX7S5UBynPgGV2/BdW5FIcYbsDxslZa0MDFIfA4oi2M0502AbCRvYncCGFfdnOi74oJ4LwO4/wLrq0DM4+JE3NWBASUh4+U3TdnWA5iGb22OhihXDdvkjzEB0pZ0D0C6VxYw1cf1tnWwq5fI6ImWSsLXk9+LQTauKK3TafKfcaxsVvxU2pxMemoMZqyMD2NCfFkowUKXDmbGJmDTsOWvKOh7NDO2npOpd3fh8DLTRNg6amsSSArp0mDKvJYpIkrDnedX0EUchjJPRFLHrzn5Lz9zZif7O/waNcezrCwl9bwAAAABJRU5ErkJggg==',
		},
		color: {
			type: Array,
			default() {
				return ['#8CCBFF']
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
.j-line-5-chart {
	height: 100%;
	width: 100%;
}
.j-line-5 {
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
}
</style>
