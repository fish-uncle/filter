<template lang="pug">
.gc-tab-3.fn-flex.pos-r.cursor-pointer
	.gc-tab-3-label {{ label }}
	.gc-tab-3-item-list.pos-a(:class="{ active: open }")
		.gc-tab-3-item.cursor-pointer.ellipsis(
			v-for="item in option",
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
		option: {
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
			currentValue: props.option[0].value,
			currentLabel: props.option[0].label,
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
	padding: 4px 8px;
	align-items: center;
	justify-content: center;
	background: rgba(0, 100, 156, 0.4);
	border-radius: 4px;
	user-select: none;
}
.gc-tab-3-label {
	font-weight: 400;
	font-size: 14px;
	color: #ffffff;
}
.gc-tab-3-item-list {
	top: 100%;
	right: 0;
	max-width: 100px;
	background: rgba(0, 100, 156, 1);
	pointer-events: none;
	opacity: 0;
	transition: all 0.3s;
	transform: translateY(-50%);
	border-radius: 4px;
	&.active {
		transform: translateY(0);
		opacity: 1;
		pointer-events: auto;
	}
}
.gc-tab-3-item {
	height: 24px;
	background: rgba(0, 100, 156, 0.4);
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
}
</style>
