<template lang="pug">
.enlarge-left-one.fn-flex.flex-column
	.fn-flex
		gc-tab1(style="margin-left: auto", :options="options", @init="init", @change="init")
		gc-date2(style="margin-left: 24px", @init="init", @change="init")
	gc-table
		thead
			tr
				td 月份
				td 人工计划抄表数
				td 实际抄表数
				td 抄表率
				td 到访不遇数量
				td 补充数量
				td 重抄数量
				td 自助抄表数量
		tbody
			tr(v-for="(item, index) in list", :key="index")
				td {{ item.value1 }}
				td {{ item.value2 }}
				td {{ item.value3 }}
				td {{ item.value4 }}
				td {{ item.value5 }}
				td {{ item.value6 }}
				td {{ item.value7 }}
				td {{ item.value8 }}
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
	name: 'EnlargeRightTwo',
	setup() {
		const state = reactive({
			options: [
				{ label: '人工', value: '人工' },
				{ label: '物联网表', value: '物联网表' },
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
