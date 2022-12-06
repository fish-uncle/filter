<template lang="pug"></template>
<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue'

export default defineComponent({
	name: 'Guide',
	setup() {
		const state = reactive({})
		return {
			...toRefs(state),
		}
	},
})
</script>
