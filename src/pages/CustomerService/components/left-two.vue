<template lang="pug">
gc-title(label="用气性质分析")
	gc-tab1
.fn-flex(style="margin-top: 20px")
	.fn-flex.flex-column
		gc-progress(label="居民（灶具)")
		gc-progress(label="居民（灶热)")
		gc-progress(label="居民（采暖)")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
	name: 'LeftTwo',
	setup() {
		const state = reactive({})
		return {
			...toRefs(state),
		}
	},
})
</script>
