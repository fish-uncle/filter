<template lang="pug">
gc-title(label="安检覆盖率分析")
	gc-tab1(@init="init", @change="init", :options="residentOptions")
	gc-enlarge(label="安检覆盖率分析", :width="1196", :height="708")
		enlarge-left2-two
.fn-flex(style="margin-top: 18px")
	gc-tab4(:options="options", style="margin-right: auto")
	gc-line9(v-model="list", unit="万户")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { residentOptions } from '@/config'
import EnlargeLeft2Two from '../enlarge/left-2-two.vue'
import { left2TwoApi } from '@/api/workorder-payment.api'
export default defineComponent({
	name: 'Left2Two',
	components: { EnlargeLeft2Two },
	setup() {
		const state = reactive({
			list: [],
			options: [
				{ label: '已安检', value: '已安检', count: 1 },
				{ label: '超期未安检', value: '超期未安检', count: 1 },
			],
			residentOptions,
		})
		const init = async type => {
			const res = await left2TwoApi(type)
			state.list = res.list
		}
		return {
			...toRefs(state),
			init,
		}
	},
})
</script>
<style lang="scss" scoped></style>
