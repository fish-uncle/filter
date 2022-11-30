<template lang="pug">
.gc-tab-1.fn-flex
	.gc-tab-1-item.fn-flex.cursor-pointer(
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
	name: 'GcTab1',
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
			state.currentValue = item.value
			state.currentLabel = item.label
			emit('change', state.currentValue)
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
.gc-tab-1 {
	user-select: none;
}
.gc-tab-1-item {
	height: 24px;
	background: rgba(0, 100, 156, 0.4);
	border-radius: 4px;
	padding: 4px 8px;
	align-items: center;
	justify-content: center;
	color: rgba(255, 255, 255, 0.75);
	font-weight: 400;
	font-size: 14px;
	&.active {
		color: #02142d;
		font-weight: 500;
		background: rgba(59, 232, 255, 0.8);
	}
	+ .gc-tab-1-item {
		margin-left: 8px;
	}
}
</style>
