<template lang="pug">
.gc-progress.fn-flex
	.gc-progress-label.fn-flex {{ label }}
	.gc-progress-des
	.gc-progress-container
		.gc-progress-content(:style="{ width: `${ratio}%` }")
	.gc-progress-des.gc-progress-des2
	.gc-progress-value.font-num {{ value }}
	.gc-progress-unit {{ unit }}
	.gc-progress-ratio.font-num {{ ratio }}%
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'GcProgress',
	props: {
		label: {
			type: String,
			default: '指标',
		},
		unit: {
			type: String,
			default: '户',
		},
		ratio: {
			type: Number,
			default: 100,
		},
		value: {
			type: Number,
			default: 0,
		},
	},
})
</script>
<style lang="scss" scoped>
.gc-progress {
	width: 100%;
	height: 60px;
	align-items: center;
	justify-content: center;
	user-select: none;
	+ .gc-progress {
		margin-top: 19px;
	}
}
.gc-progress-label {
	font-weight: 400;
	font-size: 16px;
	color: rgba(255, 255, 255, 0.75);
	margin-right: 12px;
}
.gc-progress-des {
	background-image: url('../../imgs/gc-progress/des.png');
	width: 4px;
	height: 22px;
}
.gc-progress-des2 {
	transform: rotate(180deg);
}

.gc-progress-container {
	margin: 0 3px;
	height: 16px;
	background: rgba(0, 100, 156, 0.4);
	padding: 3px 4px;
	width: 250px;
}
.gc-progress-content {
	height: 10px;
	background: #3be8ff;
	transition: all .3s;
}
.gc-progress-value {
	margin: 6px 4px 0 11px;
	font-weight: 700;
	font-size: 20px;
	color: #ffffff;
}
.gc-progress-unit {
	font-weight: 400;
	font-size: 14px;
	color: rgba(255, 255, 255, 0.75);
}
.gc-progress-ratio {
	font-weight: 700;
	font-size: 20px;
	color: #ffffff;
	margin: 6px 0 0 auto;
}
</style>
