<template lang="pug">
.enlarge-left-one.fn-flex
	gc-tab3
	.fn-flex.flex-column(style="margin-left: 24px; flex: 1")
		gc-tab1(:options="options", style="margin-left: auto", @init="init", @change="init")
		gc-table
			thead
				tr
					td 表具类型
					td 数量
			tbody
				tr(v-for="(item, index) in list", :key="index")
					td {{ item.value1 }}
					td {{ item.value2 }}
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
	name: 'EnlargeLeft1One',
	setup() {
		const state = reactive({
			options: [],
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
