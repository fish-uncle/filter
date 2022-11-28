<template lang="pug">
gc-title(label="应收组成")
	gc-date1(@init="init", @change="init")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
	name: 'RightOne',
	setup() {
		const state = reactive({
			list: [],
		})
		const init = async () => {}
		return {
			...toRefs(state),
			init,
		}
	},
})
</script>
<style lang="scss" scoped></style>
