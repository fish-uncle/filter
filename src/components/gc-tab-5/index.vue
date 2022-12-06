<template lang="pug">
.gc-tab-5.fn-flex
	.gc-tab-5-item.fn-flex.cursor-pointer(
		v-for="item in options",
		:key="item.value",
		:class="{ active: item.value === currentValue }",
		@click="handlerClick(item)"
	) {{ item.label }}
</template>
<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted, PropType } from 'vue'

type OptionProps = {
	value: string | number
	label: string
}

export default defineComponent({
	name: 'GcTab5',
	emits: ['change', 'init'],
	props: {
		options: {
			type: Array as PropType<OptionProps[]>,
			default() {
				return [
					{ label: '选择一', value: '选择一' },
					{ label: '选择二', value: '选择二' },
				]
			},
		},
	},
	setup(props, { emit }) {
		const state = reactive({
			currentValue: props.options[0].value,
			currentLabel: props.options[0].label,
		})
		const handlerClick = (item): void => {
			if (state.currentValue !== item.value) {
				state.currentValue = item.value
				state.currentLabel = item.label
				emit('change', state.currentValue)
			}
		}
		onMounted(() => {
			emit('init', state.currentValue)
		})
		return {
			...toRefs(state),
			handlerClick,
		}
	},
})
</script>
<style lang="scss" scoped>
.gc-tab-5 {
	user-select: none;
	flex-wrap: wrap;
}
.gc-tab-5-item {
	border-radius: 4px;
	padding: 4px 12px;
	align-items: center;
	justify-content: center;
	font-weight: 400;
	font-size: 16px;
	color: #fff;
	line-height: 20px;
	&.active {
		font-weight: 600;
		font-size: 14px;
		background: rgba(43, 219, 224, 0.3);
	}
	+ .gc-tab-5-item {
		margin-left: 8px;
	}
}
</style>
