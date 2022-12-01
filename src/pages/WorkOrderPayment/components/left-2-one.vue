<template lang="pug">
gc-title(label="安检分析")
	gc-date1(@init="init", @change="init")
	gc-enlarge(label="安检分析"  :width="1196", :height="708")
		enlarge-left2-one
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import EnlargeLeft2One from '../enlarge/left-2-one.vue'

export default defineComponent({
	name: 'Left2One',
	components: { EnlargeLeft2One },
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
