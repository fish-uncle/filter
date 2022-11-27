<template lang="pug">
.gc-center-title.fn-flex
	.gc-center-title-label {{ label }}
	.gc-center-title-right.fn-flex(v-for="(item, index) in list", :key="index")
		span.font-num.fn-flex {{ item }}
</template>
<script lang="ts">
import { defineComponent, computed, reactive, toRefs, watch } from 'vue'

export default defineComponent({
	name: 'GcCenterTitle',
	props: {
		modelValue: {
			type: Number,
			default: 0,
		},
		label: {
			type: String,
			default: '标题',
		},
	},
	setup(props) {
		const state = reactive({
			currentValue: props.modelValue,
		})
		const list = computed(() => {
			return state.currentValue.toString().split('')
		})
		watch(
			() => props.modelValue,
			val => {
				state.currentValue = val
			},
		)
		return {
			...toRefs(state),
			list,
		}
	},
})
</script>
<style lang="scss" scoped>
.gc-center-title {
	align-items: center;
	justify-content: center;
}
.gc-center-title-label {
	font-weight: 500;
	font-size: 28px;
	color: #ffffff;
	margin-right: 15px;
	text-stroke: 0.5px #000;
	-webkit-text-stroke: 0.5px #000;
}
.gc-center-title-right {
	span {
		width: 56px;
		height: 80px;
		background-image: url('../../imgs/gc-center-title/bg.png');
		background-size: 56px 80px;
		background-repeat: no-repeat;
		background-position: center;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 48px;
		color: #ffffff;
	}
	+ .gc-center-title-right {
		margin-left: 16px;
	}
}
</style>
