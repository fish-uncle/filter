<template lang="pug">
gc-title(label="应收组成")
	gc-tab1(@init="init", @change="init", :option="option")
.fn-flex(style="margin-top: 18px")
	.fn-flex.flex-column
		gc-target1(label="本期应收金额(元)", :width="140")
		gc-target1(label="本期实收历史(元)", :width="140")
		gc-target1(label="气费回收率", :width="140")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
	name: 'RightThree',
	setup() {
		const state = reactive({
			list: [],
			option: [
				{ label: '本期', value: '本期' },
				{ label: '累计', value: '累计' },
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
