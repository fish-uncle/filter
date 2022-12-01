<template lang="pug">
.enlarge-left-one.fn-flex.flex-column
	.fn-flex
		gc-tab1(style="margin-left: auto", :options="meterOptions", @init="init", @change="init")
		gc-date2(style="margin-left: 24px", @init="init", @change="init")
	gc-table(:stripe="true", :columns="columns", v-model="list")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { meterOptions } from '@/config'

export default defineComponent({
	name: 'EnlargeRightTwo',
	setup() {
		const state = reactive({
			meterOptions,
			columns: [
				{ label: '月份', key: 'value1', width: 76 },
				{ label: '人工计划抄表数', key: 'value2', width: 124 },
				{ label: '实际抄表数', key: 'value3', width: 106 },
				{ label: '抄表率', key: 'value4', width: 106 },
				{ label: '到访不遇数量', key: 'value5', width: 108 },
				{ label: '补充数量', key: 'value6', width: 108 },
				{ label: '重抄数量', key: 'value7', width: 108 },
				{ label: '自助抄表数量', key: 'value8', width: 118 },
			],
			list: [
				{
					value1: '01',
					value2: 313134,
					value3: 313134,
					value4: 313134,
					value5: 313134,
					value6: 313134,
					value7: 313134,
					value8: 313134,
				},
				{
					value1: '02',
					value2: 313134,
					value3: 313134,
					value4: 313134,
					value5: 313134,
					value6: 313134,
					value7: 313134,
					value8: 313134,
				},
				{
					value1: '03',
					value2: 313134,
					value3: 313134,
					value4: 313134,
					value5: 313134,
					value6: 313134,
					value7: 313134,
					value8: 313134,
				},
				{
					value1: '04',
					value2: 313134,
					value3: 313134,
					value4: 313134,
					value5: 313134,
					value6: 313134,
					value7: 313134,
					value8: 313134,
				},
				{
					value1: '05',
					value2: 313134,
					value3: 313134,
					value4: 313134,
					value5: 313134,
					value6: 313134,
					value7: 313134,
					value8: 313134,
				},
				{
					value1: '06',
					value2: 313134,
					value3: 313134,
					value4: 313134,
					value5: 313134,
					value6: 313134,
					value7: 313134,
					value8: 313134,
				},
				{
					value1: '07',
					value2: 313134,
					value3: 313134,
					value4: 313134,
					value5: 313134,
					value6: 313134,
					value7: 313134,
					value8: 313134,
				},
				{
					value1: '08',
					value2: 313134,
					value3: 313134,
					value4: 313134,
					value5: 313134,
					value6: 313134,
					value7: 313134,
					value8: 313134,
				},
				{
					value1: '09',
					value2: 313134,
					value3: 313134,
					value4: 313134,
					value5: 313134,
					value6: 313134,
					value7: 313134,
					value8: 313134,
				},
				{
					value1: '10',
					value2: 313134,
					value3: 313134,
					value4: 313134,
					value5: 313134,
					value6: 313134,
					value7: 313134,
					value8: 313134,
				},
				{
					value1: '11',
					value2: 313134,
					value3: 313134,
					value4: 313134,
					value5: 313134,
					value6: 313134,
					value7: 313134,
					value8: 313134,
				},
				{
					value1: '12',
					value2: 313134,
					value3: 313134,
					value4: 313134,
					value5: 313134,
					value6: 313134,
					value7: 313134,
					value8: 313134,
				},
			],
		})
		const init = () => {}
		return {
			...toRefs(state),
			init,
		}
	},
})
</script>
<style lang="scss" scoped>
.enlarge-left-one {
	width: 100%;
}
</style>
