<template lang="pug">
.enlarge-left-1-one.fn-flex
	gc-tab3(label="区域列表", :options="areaOptions")
	.fn-flex.flex-column(style="margin-left: 24px; flex: 1")
		gc-tab1(:options="residentOptions", style="margin-left: auto", @init="init", @change="init")
		gc-table(:stripe="true", :columns="columns", v-model="list")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { areaOptions, residentOptions } from '@/config'

export default defineComponent({
	name: 'EnlargeLeft1One',
	setup() {
		const state = reactive({
			residentOptions,
			areaOptions,
			columns: [
				{ label: '表具类型', key: 'value1', width: 247 },
				{ label: '数量', key: 'value2', width: 265 },
			],
			list: [
				{ value1: 'IC卡表', value2: 313134 },
				{ value1: 'IC卡表', value2: 313134 },
				{ value1: 'IC卡表', value2: 313134 },
				{ value1: 'IC卡表', value2: 313134 },
				{ value1: 'IC卡表', value2: 313134 },
				{ value1: 'IC卡表', value2: 313134 },
				{ value1: 'IC卡表', value2: 313134 },
				{ value1: 'IC卡表', value2: 313134 },
				{ value1: 'IC卡表', value2: 313134 },
				{ value1: 'IC卡表', value2: 313134 },
				{ value1: 'IC卡表', value2: 313134 },
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
