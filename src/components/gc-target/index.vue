<template lang="pug">
.gc-target.fn-flex.flex-column
	.gc-target-label.pos-r.fn-flex {{ label }}
	.gc-target-value.fn-flex.font-num {{ modelValue }}
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'GcTarget',
	props: {
		label: {
			type: String,
			default: '指标',
		},
		modelValue: {
			type: Number,
			default: 0,
		},
	},
})
</script>
<style lang="scss" scoped>
.gc-target {
	+ .gc-target {
		margin-top: 8px;
	}
}
.gc-target-label {
	width: 106px;
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
.gc-target-value {
	width: 106px;
	height: 36px;
	align-items: center;
	justify-content: center;
	font-weight: 700;
	font-size: 20px;
	color: #ffffff;
}
</style>
