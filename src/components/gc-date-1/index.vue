<template lang="pug">
.gc-date-1.fn-flex.pos-r
	.gc-date-1-horn.gc-date-1-horn-left.cursor-pointer(@click="changePrev")
	.gc-date-1-current {{ currentLabel }}
	.gc-date-1-horn.gc-date-1-horn-right.cursor-pointer(:class="{ disabled: isLast }", @click="changeNext")
</template>
<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted, computed } from 'vue'
import { format, isThisMonth, addMonths } from 'date-fns'

export default defineComponent({
	name: 'GcDate1',
	emits: ['change', 'init'],
	props: {
		valueFormat: {
			type: String,
			default: 'yyyy-MM',
		},
		labelFormat: {
			type: String,
			default: 'yyyy.MM',
		},
	},
	setup(props, { emit }) {
		const currentTime = new Date()
		const state = reactive({
			currentTime,
			currentValue: format(currentTime, props.valueFormat),
			currentLabel: format(currentTime, props.labelFormat),
		})
		const changePrev = (): void => {
			state.currentTime = addMonths(state.currentTime, -1)
			state.currentValue = format(state.currentTime, props.valueFormat)
			state.currentLabel = format(state.currentTime, props.labelFormat)
			emit('change', state.currentValue)
		}
		const changeNext = (): void => {
			if (isThisMonth(state.currentTime)) {
				return
			}
			state.currentTime = addMonths(state.currentTime, 1)
			state.currentValue = format(state.currentTime, props.valueFormat)
			state.currentLabel = format(state.currentTime, props.labelFormat)
			emit('change', state.currentValue)
		}
		const isLast = computed(() => {
			return isThisMonth(state.currentTime)
		})
		onMounted(() => {
			emit('init', state.currentValue)
		})
		return {
			...toRefs(state),
			isLast,
			changePrev,
			changeNext,
		}
	},
})
</script>
<style lang="scss" scoped>
.gc-date-1 {
	user-select: none;
	align-items: center;
	justify-content: center;
}
.gc-date-1-current {
	font-weight: 400;
	font-size: 14px;
	color: #ffffff;
	padding: 4px 8px;
	background: rgba(0, 100, 156, 0.4);
	border-radius: 4px;
	margin: 0 12px;
	width: 70px;
}
.gc-date-1-horn {
	background-image: url('../../imgs/gc-date-1/horn.png');
	background-position: center;
	background-repeat: no-repeat;
	background-size: 8px 12px;
	width: 8px;
	height: 12px;
	&.disabled {
		cursor: no-drop;
		transform: rotate(360deg);
		background-image: url('../../imgs/gc-date-1/horn-disabled.png');
	}
}
.gc-date-1-horn-right{
	transform: rotate(180deg);
}
</style>
