<template lang="pug">
.fn-flex.flex-column
	gc-date1(style="margin-left: auto", @init="init", @change="init")
	gc-table(:stripe="true", :columns="columns1", v-model="list1")
	gc-table(:stripe="true", :columns="columns2", v-model="list2")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
	name: 'EnlargeLeftTwo',
	setup() {
		const state = reactive({
			columns1: [
				{ label: '用户类型', key: 'value1', width: 107 },
				{ label: '用气性质', key: 'value2', width: 167 },
				{ label: '新增用户量', key: 'value3', width: 149 },
				{ label: '同比', key: 'value4', width: 145 },
				{ label: '环比', key: 'value5', width: 138 },
			],
			list1: [
				{ value1: '居民', value2: 313134, value3: 313134, value4: 313134, value5: 313134 },
				{ value1: '居民', value2: 313134, value3: 313134, value4: 313134, value5: 313134 },
				{ value1: '居民', value2: 313134, value3: 313134, value4: 313134, value5: 313134 },
			],
			columns2: [
				{ label: '用户类型', key: 'value1', width: 107 },
				{ label: '用气性质', key: 'value2', width: 167 },
				{ label: '新增用户量', key: 'value3', width: 149 },
				{ label: '同比', key: 'value4', width: 145 },
				{ label: '环比', key: 'value5', width: 138 },
			],
			list2: [
				{ value1: '非居民', value2: 313134, value3: 313134, value4: 313134, value5: 313134 },
				{ value1: '非居民', value2: 313134, value3: 313134, value4: 313134, value5: 313134 },
				{ value1: '非居民', value2: 313134, value3: 313134, value4: 313134, value5: 313134 },
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
