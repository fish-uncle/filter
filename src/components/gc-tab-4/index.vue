<template lang="pug">
.gc-tab-4.fn-flex.flex-column(:class="`gc-tab-4-${size}`")
	.gc-tab-4-item.cursor-pointer.ellipsis.fn-flex.pos-r.flex-column(
		v-for="item in options",
		:key="item.value",
		:class="{ active: item.value === currentValue }",
		@click="handlerClick(item)"
	) 
		span {{ item.label }}
		h2.font-num {{ item.count }}
		i.pos-a
</template>
<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted, PropType } from 'vue'
import { ClickOutside } from '@/directives'

type OptionProps = {
	value: string | number
	label: string
	count: number
}
type SizeProps = 'normal' | 'small'

export default defineComponent({
	name: 'GcTab4',
	directives: { ClickOutside },
	emits: ['change', 'init'],
	props: {
		options: {
			type: Array as PropType<OptionProps[]>,
			default() {
				return [
					{ label: '选择一', value: '选择一', count: 0 },
					{ label: '选择二', value: '选择二', count: 0 },
				]
			},
		},
		size: {
			type: String as PropType<SizeProps>,
			default: 'normal',
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
.gc-tab-4 {
	user-select: none;
}
.gc-tab-4-normal {
	.gc-tab-4-item {
		width: 142px;
		height: 70px;
		+ .gc-tab-4-item {
			margin-top: 26px;
		}
	}
}
.gc-tab-4-small {
	.gc-tab-4-item {
		width: 140px;
		height: 64px;
		+ .gc-tab-4-item {
			margin-top: 12px;
		}
	}
}
.gc-tab-4-item {
	padding: 14px 8px;
	background: rgba(0, 100, 156, 0.4);
	border-radius: 6px;
	border: 1px solid transparent;
	transition: all 0.3s;
	justify-content: center;

	span {
		font-weight: 400;
		font-size: 16px;
		color: rgba(255, 255, 255, 0.75);
	}
	h2 {
		font-weight: 700;
		font-size: 20px;
		color: rgba(255, 255, 255, 0.75);
		margin-top: 4px;
	}
	i {
		background-image: url('../../imgs/gc-tab-4/icon.png');
		background-size: 11px 13px;
		background-position: center;
		top: 14px;
		right: 11px;
		opacity: 0;
		width: 11px;
		height: 13px;
		transition: all 0.3s;
	}
	&.active {
		background: #004483;
		border: 1px solid #3be8ff;
		span{
			color: #fff;
		}
		h2 {
			color: #3ce8ff;
		}
		i {
			opacity: 1;
		}
	}
}
</style>
