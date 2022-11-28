<template lang="pug">
.gc-box.fn-flex
	.gc-box-content.gc-box-child(v-if="$slots.default", :style="{ width: `${width}px` }")
		slot
	.gc-box-left.gc-box-child(v-if="$slots.left", :style="{ width: `${leftWidth}px` }")
		slot(name="left")
	.gc-box-right.gc-box-child(v-if="$slots.right", :style="{ width: `${rightWidth}px` }")
		slot(name="right")
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'GcBox',
	props: {
		width: {
			type: Number,
			default: 1120,
		},
		leftWidth: {
			type: Number,
			default: 560,
		},
		rightWidth: {
			type: Number,
			default: 560,
		},
	},
})
</script>
<style lang="scss" scoped>
.gc-box-child {
	height: 300px;
	padding: 14px;
}
.gc-box {
	width: 100%;
	align-items: center;
}
.gc-box-content {
	width: 100%;
}
</style>
