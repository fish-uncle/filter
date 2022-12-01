<template lang="pug">
.enlarge-left-2-one.fn-flex
	gc-tab3(label="区域列表", :options="areaOptions")
	.fn-flex.flex-column(style="margin-left: 24px; flex: 1")
		.fn-flex(style="align-items: center")
			gc-date1(style="margin-left: auto", @init="init", @change="init")
		gc-table(:stripe="true", :columns="columns1", v-model="list1")
		gc-table(:stripe="true", :columns="columns2", v-model="list2")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { areaOptions } from '@/config'

export default defineComponent({
	name: 'EnlargeLeft2One',
	setup() {
		const state = reactive({
			areaOptions,
			columns1: [
				{ label: '区域名称', key: 'value1', width: 434 },
				{ label: '总计划安检数', key: 'value2', width: 174 },
				{ label: '总完成数量', key: 'value3', width: 174 },
				{ label: '总完成率', key: 'value4', width: 174 },
			],
			list1: [{ value1: '魏塘街道', value2: 313134, value3: 313134, value4: '80%' }],
			columns2: [
				{ label: '小区列表', key: 'value1', width: 434 },
				{ label: '计划安检数', key: 'value2', width: 174 },
				{ label: '完成数量', key: 'value3', width: 174 },
				{ label: '完成率', key: 'value4', width: 174 },
			],
			list2: [
				{ value1: '魏塘街道', value2: 313134, value3: 313134, value4: '80%' },
				{ value1: '魏塘街道', value2: 313134, value3: 313134, value4: '80%' },
				{ value1: '魏塘街道', value2: 313134, value3: 313134, value4: '80%' },
				{ value1: '魏塘街道', value2: 313134, value3: 313134, value4: '80%' },
				{ value1: '魏塘街道', value2: 313134, value3: 313134, value4: '80%' },
				{ value1: '魏塘街道', value2: 313134, value3: 313134, value4: '80%' },
				{ value1: '魏塘街道', value2: 313134, value3: 313134, value4: '80%' },
				{ value1: '魏塘街道', value2: 313134, value3: 313134, value4: '80%' },
				{ value1: '魏塘街道', value2: 313134, value3: 313134, value4: '80%' },
				{ value1: '魏塘街道', value2: 313134, value3: 313134, value4: '80%' },
				{ value1: '魏塘街道', value2: 313134, value3: 313134, value4: '80%' },
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
