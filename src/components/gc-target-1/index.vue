<template lang="pug">
.gc-target-1.fn-flex.flex-column
	.gc-target-1-label.pos-r.fn-flex(:style="{ width: `${width}px` }") {{ label }}
	.gc-target-1-value.fn-flex.font-num(:style="{ width: `${width}px` }") {{ modelValue }}
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'GcTarget1',
	props: {
		label: {
			type: String,
			default: '指标',
		},
		modelValue: {
			type: Number,
			default: 0,
		},
		width: {
			type: Number,
			default: 106,
		},
	},
})
</script>
<style lang="scss" scoped>
.gc-target-1 {
	user-select: none;
	+ .gc-target-1 {
		margin-top: 8px;
	}
}
.gc-target-1-label {
	height: 32px;
	align-items: center;
	justify-content: center;
	background: rgba(0, 100, 156, 0.4);
	border-radius: 2px;
	font-weight: 400;
	font-size: 14px;
	color: rgba(255, 255, 255, 0.75);
	&:before,
	&:after {
		content: '';
		width: 9px;
		height: 2px;
		background: #c0d6ff;
		position: absolute;
		top: 0;
	}
	&:before {
		left: 0;
	}
	&:after {
		right: 0;
	}
}
.gc-target-1-value {
	height: 36px;
	align-items: center;
	justify-content: center;
	font-weight: 700;
	font-size: 20px;
	color: #ffffff;
}
</style>
