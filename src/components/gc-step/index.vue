<template lang="pug">
.gc-step.fn-flex.pos-a
	.gc-step-item.fn-flex.cursor-pointer(
		v-for="(item, index) in list",
		:key="index",
		:class="{ active: index + 1 === currentStep }",
		@click="handlerClick(index)"
	)
</template>
<script lang="ts">
import { defineComponent, toRefs, reactive, computed, watch } from 'vue'

export default defineComponent({
	name: 'GcStep',
	props: {
		stepNumber: {
			type: Number,
			default: 2,
		},
		modelValue: {
			type: Number,
			default: 1,
		},
	},
	emits: ['update:modelValue', 'change'],
	setup(props, { emit }) {
		const state = reactive({
			currentStep: props.modelValue,
		})
		const list = computed(() => {
			return new Array(props.stepNumber).fill(1)
		})
		const handlerClick = (index): void => {
			state.currentStep = index + 1
			emit('update:modelValue', state.currentStep)
			emit('change', state.currentStep)
		}
		watch(
			() => props.modelValue,
			val => {
				state.currentStep = val
			},
		)
		return {
			...toRefs(state),
			handlerClick,
			list,
		}
	},
})
</script>
<style lang="scss" scoped>
.gc-step {
	user-select: none;
	width: 1114px;
	left: 17px;
	bottom: 72px;
	align-items: center;
	justify-content: center;
}
.gc-step-item {
	height: 10px;
	width: 36px;
	background: #133a5e;
	border: 1px solid #1d6a96;
	color: rgba(255, 255, 255, 0.75);
	transition:  all .3s;
	&.active {
		background: #1d6a96;
		border: 1px solid #3CE8FF;
	}
	+ .gc-step-item {
		margin-left: 5px;
	}
}
</style>
