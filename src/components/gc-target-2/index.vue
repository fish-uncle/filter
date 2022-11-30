<template lang="pug">
.gc-target-2.fn-flex.pos-r
	.gc-target-2-label.pos-r {{ label }}
	.gc-target-2-value.font-num {{ value }}
	.gc-target-2-unit.font-num {{ unit }}
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'GcTarget2',
	props: {
		label: {
			type: String,
			default: '指标',
		},
		value: {
			type: [Number, String],
			default: 0,
		},
		unit: {
			type: String,
			default: '%',
		},
	},
})
</script>
<style lang="scss" scoped>
.gc-target-2 {
	user-select: none;
	height: 40px;
	align-items: center;
	justify-content: center;
	padding: 0 12px;
	background-color: rgba(0, 100, 156, 0.6);
	width: 100%;
	&:before,
	&:after {
		content: '';
		width: 1px;
		height: 16px;
		background: #3ce8ff;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	&:before {
		left: 0;
	}
	&:after {
		right: 0;
	}
}
.gc-target-2-label {
	font-weight: 400;
	font-size: 16px;
	color: #3ce8ff;
}
.gc-target-2-value {
	font-weight: 700;
	font-size: 24px;
	color: #ffffff;
	margin-left: auto;
	margin-top: 6px;
}
.gc-target-2-unit {
	font-weight: 400;
	font-size: 14px;
	color: #ffffff;
	margin-left: 8px;
	margin-top: 6px;
}
</style>
