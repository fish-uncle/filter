<template lang="pug">
gc-title(label="抄表率分析")
	gc-enlarge
gc-line6(v-model="list", :unit="['数', '%']")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
	name: 'RightTwo',
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
