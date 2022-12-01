<template lang="pug">
gc-title(label="应收组成")
	gc-date1(@init="init", @change="init")
.fn-flex(style="margin-top: 18px")
	gc-tab4(size="small" :options="options")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
	name: 'RightOne',
	setup() {
		const state = reactive({
			options: [
				{ label: 'IC卡充值金额', value: 'IC卡充值金额', count: 1 },
				{ label: '销气量金额', value: '销气量金额', count: 1 },
				{ label: '本月气量(m³)', value: '本月气量(m³)', count: 1 },
			],
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
