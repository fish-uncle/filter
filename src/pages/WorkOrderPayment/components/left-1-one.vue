<template lang="pug">
gc-title(label="表数量分析")
	gc-tab1(@init="init", @change="init", :option="option")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
	name: 'Left1One',
	setup() {
		const state = reactive({
			list: [],
			option: [
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
