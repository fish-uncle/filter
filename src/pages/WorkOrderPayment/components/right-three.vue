<template lang="pug">
gc-title(label="应收组成")
	gc-tab1(@init="init", @change="init", :options="options")
.fn-flex(style="margin-top: 18px")
	.fn-flex.flex-column(style="margin-right: auto")
		gc-target1(label="本期应收金额(元)", :width="140")
		gc-target1(label="本期实收历史(元)", :width="140")
		gc-target1(label="气费回收率", :width="140")
	gc-line-8(v-model="list", :legend="legend", :unit="['元', '%']")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import {rightThreeApi} from '@/api/workorder-payment.api'

export default defineComponent({
	name: 'RightThree',
	setup() {
		const state = reactive({
			list: [],
			legend: ['应收', '实收', '气费回收率'],
			options: [
				{ label: '本期', value: '本期' },
				{ label: '累计', value: '累计' },
			],
		})
		const init = async (type) => {
			const res= await rightThreeApi(type)
			state.list=res.list
		}
		return {
			...toRefs(state),
			init,
		}
	},
})
</script>
<style lang="scss" scoped></style>
