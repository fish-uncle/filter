<template lang="pug">
gc-title(label="重大隐患处理")
	gc-date1(@init="init", @change="init")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
	name: 'Left2Three',
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
