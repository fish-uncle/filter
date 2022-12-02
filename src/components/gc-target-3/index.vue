<template lang="pug">
.gc-target-3.fn-flex.pos-r
	img(:src="icon")
	label {{ label }}
	h2.font-num {{ value }}
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'GcTarget3',
	props: {
		label: {
			type: String,
			default: '指标',
		},
		value: {
			type: [Number, String],
			default: 0,
		},
		icon: {
			type: String,
		},
	},
})
</script>
<style lang="scss" scoped>
.gc-target-3 {
	width: 288px;
	user-select: none;
	height: 60px;
	align-items: center;
	justify-content: center;
	padding: 12px;
	background: rgba(0, 100, 156, 0.2);
	border-radius: 2px;
	+ .gc-target-3 {
		margin-top: 24px;
	}
	img {
		width: 36px;
		height: 36px;
	}
	label {
		font-weight: 400;
		font-size: 18px;
		color: #00ddff;
		margin-left: 10px;
	}
	h2 {
		font-weight: 700;
		font-size: 32px;
		margin-left: auto;
		color: #ffffff;
		margin-top: 8px;
	}
}
</style>
