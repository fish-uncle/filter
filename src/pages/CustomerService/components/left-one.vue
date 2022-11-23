<template lang="pug">
gc-title(label="用户组成")
	gc-tab1
.fn-flex(style="margin-top: 18px")
	.fn-flex.flex-column
		gc-target(label="用户总数")
		gc-target(label="居民户")
		gc-target(label="非居民户")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
	name: 'LeftOne',
	setup() {
		const state = reactive({})
		return {
			...toRefs(state),
		}
	},
})
</script>
