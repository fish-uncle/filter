<template lang="pug">
.gc-title.fn-flex.flex-column.pos-r
	.gc-title-content.fn-flex.pos-r
		.gc-title-icon.fn-flex
			span
		.gc-title-label.font-title {{ label }}
		.gc-title-right.fn-flex
			slot
	.gc-title-line.pos-a
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'GcTitle',
	props: {
		label: {
			type: String,
			default: '标题',
		},
	},
})
</script>
<style lang="scss">
.gc-date-1 {
	+ .gc-enlarge {
		margin-left: 8px;
	}
}
.gc-tab-1,
.gc-tab-2 {
	+ .gc-enlarge {
		margin-left: 8px;
	}
}
</style>
<style lang="scss" scoped>
.gc-title-line {
	bottom: 0;
	width: 100%;
	height: 1px;
	background: rgba(255, 255, 255, 0.4);
	&:before,
	&:after {
		width: 12px;
		content: '';
		background: #ffffff;
		height: 1px;
		top: 0;
		position: absolute;
	}
	&:before {
		left: 0;
	}
	&:after {
		right: 0;
	}
}
.gc-title-right {
	margin-left: auto;
	align-items: center;
}
.gc-title-content {
	align-items: center;
	z-index: 1;
	height: calc(100% - 4px);
}
.gc-title {
	width: 100%;
	height: 32px;
	user-select: none;
}
.gc-title-label {
	font-weight: 400;
	font-size: 24px;
	line-height: 24px;
	color: #ffffff;
}
.gc-title-icon {
	margin: 0 6px 0 4px;
	width: 18px;
	height: 18px;
	background: rgba(255, 255, 255, 0.16);
	align-items: center;
	justify-content: center;
	span {
		width: 10px;
		height: 10px;
		background: #3be8ff;
		border: 1.5px solid #0598ea;
	}
}
</style>
