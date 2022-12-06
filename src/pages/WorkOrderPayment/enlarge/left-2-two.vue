<template lang="pug">
.fn-flex
	gc-tab3(label="区域列表", :options="areaOptions")
	.fn-flex.flex-column(style="margin-left: 24px; flex: 1")
		.fn-flex
			gc-tab1(:options="residentOptions", style="margin-left: auto", @init="init", @change="init")
			gc-date1(style="margin-left: 24px", @init="init", @change="init")
		gc-table(:stripe="true", :columns="columns1", v-model="list1")
		gc-table(:stripe="true", :columns="columns2", v-model="list2")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { areaOptions, residentOptions } from '@/config'

export default defineComponent({
	name: 'EnlargeLeft2Two',
	setup() {
		const state = reactive({
			residentOptions,
			areaOptions,
			columns1: [
				{ label: '区域名称', key: 'value1', width: 434 },
				{ label: '已安检', key: 'value2', width: 262 },
				{ label: '超期未安检', key: 'value3', width: 261 },
			],
			list1: [{ value1: '魏塘街道', value2: 313134, value3: 313134 }],
			columns2: [
				{ label: '小区列表', key: 'value1', width: 434 },
				{ label: '已安检', key: 'value2', width: 262 },
				{ label: '超期未安检', key: 'value3', width: 261 },
			],
			list2: [
				{ value1: '魏塘街道', value2: 313134, value3: 313134 },
				{ value1: '魏塘街道', value2: 313134, value3: 313134 },
				{ value1: '魏塘街道', value2: 313134, value3: 313134 },
				{ value1: '魏塘街道', value2: 313134, value3: 313134 },
				{ value1: '魏塘街道', value2: 313134, value3: 313134 },
				{ value1: '魏塘街道', value2: 313134, value3: 313134 },
				{ value1: '魏塘街道', value2: 313134, value3: 313134 },
				{ value1: '魏塘街道', value2: 313134, value3: 313134 },
				{ value1: '魏塘街道', value2: 313134, value3: 313134 },
				{ value1: '魏塘街道', value2: 313134, value3: 313134 },
				{ value1: '魏塘街道', value2: 313134, value3: 313134 },
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
