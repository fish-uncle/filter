<template lang="pug">
.gc-tab-2.fn-flex.pos-r.cursor-pointer(:class="{ active: open }", v-click-outside="handlerHide")
	.gc-tab-2-current(@click="handlerOpen") {{ currentLabel }}
	.gc-tab-2-horn(@click="handlerOpen")
	.gc-tab-2-item-list.pos-a(:class="{ active: open }")
		.gc-tab-2-item.cursor-pointer.ellipsis.fn-flex(
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
	name: 'GcTab2',
	directives: { ClickOutside },
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
			open: false,
			currentValue: props.options[0].value,
			currentLabel: props.options[0].label,
		})
		const handlerOpen = () => {
			state.open = !state.open
		}
		const handlerHide = () => {
			state.open = false
		}
		const handlerClick = (item): void => {
			if (state.currentValue !== item.value) {
				state.currentValue = item.value
				state.currentLabel = item.label
				emit('change', state.currentValue)
			}
			state.open = false
		}
		onMounted(() => {
			emit('init', state.currentValue)
		})
		return {
			...toRefs(state),
			handlerClick,
			handlerOpen,
			handlerHide,
		}
	},
})
</script>
<style lang="scss" scoped>
.gc-tab-2 {
	padding: 4px 8px;
	align-items: center;
	justify-content: center;
	background: rgba(0, 100, 156, 0.4);
	border-radius: 4px;
	user-select: none;
	&.active {
		background: rgba(59, 232, 255, 0.8);
		.gc-tab-2-current {
			font-weight: 500;
			color: #02142d;
		}
	}
}
.gc-tab-2-current {
	font-weight: 400;
	font-size: 14px;
	color: #ffffff;
}
.gc-tab-2-horn {
	margin-left: 8px;
	background-image: url('../../imgs/gc-tab-2/horn.png');
	background-position: center;
	background-repeat: no-repeat;
	background-size: 8px 4px;
	width: 8px;
	height: 4px;
}
.gc-tab-2-item-list {
	top: 100%;
	right: 0;
	min-width: 67px;
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
.gc-tab-2-item {
	height: 24px;
	width: 100%;
	background: rgba(0, 100, 156, 0.4);
	padding: 4px 8px;
	align-items: center;
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
