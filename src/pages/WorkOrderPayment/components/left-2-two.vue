<template lang="pug">
gc-title(label="安检覆盖率分析")
	gc-tab1(@init="init", @change="init", :options="options")
	gc-enlarge
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
	name: 'Left2Two',
	setup() {
		const state = reactive({
			list: [],
			options: [
				{ label: '居民', value: '居民' },
				{ label: '非居民', value: '非居民' },
			],
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
