<template lang="pug">
j-top-view
gc-left-view
	gc-box
		template(v-slot:left)
			gc-title(label="用户组成")
		template(v-slot:right)
			gc-title(label="用气性质分析")
	gc-box
		template(v-slot:left)
			gc-title(label="近12月客户新增")
		template(v-slot:right)
			gc-title(label="开户点火渠道分析")
j-right-view
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useCommonStore } from '@/store'
import { storeToRefs } from 'pinia'

export default defineComponent({
	name: 'WorkOrderPayment-1',
	setup() {
		const commonStore = useCommonStore()
		const { isCustomerService } = storeToRefs(commonStore)
		const state = reactive({
			errorTabs: [
				{
					label: '月',
					value: 'month',
				},
				{
					label: '年',
					value: 'year',
				},
			],
			tabList: [
				{
					value: 'offline',
					label: '设备离线',
				},
				{
					value: 'alarm',
					label: '设备报警',
				},
				{
					value: 'treatment',
					label: '处理查询',
				},
			],
			curTab: 'alarm',
			curErrorTab: 'month',
		})
		return {
			...toRefs(state),
			isCustomerService,
		}
	},
})
</script>
