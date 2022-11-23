<template lang="pug">
.j-radio.fn-flex
	.j-radio-item.fn-flex(
		v-for="item in list",
		:class="{ active: item.value === currentValue }",
		@click="handleChange(item.value)"
	)
		.j-radio-item-box.pos-r
		span {{ item.label }}
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue'

export default defineComponent({
	name: 'j-radio',
	props: {
		modelValue: {
			type: String,
		},
		list: {
			type: Array,
			default() {
				return []
			},
		},
	},
	emits: ['update:modelValue', 'change'],
	setup(props, { emit }) {
		const state = reactive({ currentValue: props.modelValue })
		watch(
			() => props.modelValue,
			val => {
				state.currentValue = val
			},
		)
		const handleChange = val => {
			emit('update:modelValue', val)
			emit('change', val)
		}
		return {
			...toRefs(state),
			handleChange,
		}
	},
})
</script>
<style lang="scss" scoped>
.j-radio-item-box {
	width: 16px;
	height: 16px;
	border: 1px solid #3b9aff;
	margin-right: 8px;
}
.j-radio-item {
	margin-right: 24px;
	align-items: center;
	cursor: pointer;
	&:last-child {
		margin-right: 0;
	}
	span {
		color: #3b9aff;
		font-weight: 400;
		font-size: 16px;
	}
	&.active {
		.j-radio-item-box {
			&:before {
				content: '';
				position: absolute;
				width: 6px;
				height: 6px;
				background: #ffffff;
				top: 50%;
				margin-left: -3px;
				left: 50%;
				margin-top: -3px;
			}
		}
		span {
			color: #ffffff;
		}
	}
}
</style>
