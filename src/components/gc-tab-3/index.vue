<template lang="pug">
.gc-tab-3.fn-flex.pos-r.flex-column
	.gc-tab-3-label.fn-flex {{ label }}
	.gc-tab-3-item-list
		.gc-tab-3-item.cursor-pointer.ellipsis.fn-flex(
			v-for="item in options",
			:key="item.value",
			:class="{ active: item.value === currentValue }",
			@click="handlerClick(item)"
		) {{ item.label }}
</template>
<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted, PropType } from 'vue'
import { ClickOutside } from '@/directives'

type OptionProps = {
	value: string | number
	label: string
}

export default defineComponent({
	name: 'GcTab3',
	directives: { ClickOutside },
	emits: ['change', 'init'],
	props: {
		label: {
			type: String,
			default: '列表',
		},
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
.gc-tab-3 {
	background: rgba(0, 105, 164, 0.46);
	border: 1px solid #1D6A96;
	border-radius: 4px;
	user-select: none;
	padding: 8px;
	min-width: 176px;
}
.gc-tab-3-label {
	font-weight: 400;
	font-size: 14px;
	color: #3CE8FF;
	height: 32px;
	align-items: center;
	background: rgba(0, 0, 0, 0.01);
	box-shadow: 0 1px 0 rgba(60, 232, 255, 0.3);
}
.gc-tab-3-item-list {
	margin-top: 10px;
}
.gc-tab-3-item {
	height: 40px;
	width: 160px;
	padding: 12px 8px;
	align-items: center;
	color: #FFFFFF;
	font-weight: 400;
	font-size: 16px;
	&.active {
		font-weight: 500;
		background: #1D6A96;
	}
}
</style>
