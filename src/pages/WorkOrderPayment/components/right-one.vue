<template lang="pug">
gc-title(label="应收组成")
	gc-date1(@init="init", @change="init")
.fn-flex(style="margin-top: 18px")
	gc-tab4(size="small", :options="options", style="margin-right: auto")
	gc-pie7(v-model="list", unit="万")
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
			list: [
				{ value: 30, ratio: 30, label: '居民户' },
				{ value: 10, ratio: 10, label: '非居民(工业)' },
				{ value: 20, ratio: 20, label: '非居民(建筑)' },
				{ value: 20, ratio: 20, label: '非居民(商业)' },
				{ value: 20, ratio: 20, label: '非居民(非经营)' },
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
