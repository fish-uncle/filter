<template lang="pug">
.fn-flex.flex-column
	gc-table(:stripe="true", :columns="columns", v-model="list", :hide-header="true", :hide-border="true")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'

export default defineComponent({
	name: 'EnlargeRightTwo',
	setup() {
		const state = reactive({
			columns: [
				{ label: '', key: 'value1', width: 160 },
				{ label: '', key: 'value2', width: 160, style: 'color: #00DDFF' },
				{ label: '', key: 'value3', width: 160 },
				{ label: '', key: 'value4', width: 160, style: 'color: #00DDFF' },
				{ label: '', key: 'value5', width: 160 },
				{ label: '', key: 'value6', width: 160, style: 'color: #00DDFF' },
			],
			list: [
				{
					value1: '开户预约',
					value2: 313134,
					value3: '恢复供气',
					value4: 313134,
					value5: '换管预约',
					value6: 313134,
				},
				{
					value1: '改造预约',
					value2: 313134,
					value3: '安检预约',
					value4: 313134,
					value5: '过户预约',
					value6: 313134,
				},
				{
					value1: '点火预约',
					value2: 313134,
					value3: '电子发票',
					value4: 313134,
					value5: '信息变更',
					value6: 313134,
				},
				{
					value1: '报装预约',
					value2: 313134,
					value3: '气表过户',
					value4: 313134,
					value5: '增容申请',
					value6: 313134,
				},
				{
					value1: '燃气报修',
					value2: 313134,
					value3: '个人客户接气申请',
					value4: 313134,
					value5: '验表申请',
					value6: 313134,
				},
				{
					value1: '燃气关停',
					value2: 313134,
					value3: '通气申请',
					value4: 313134,
					value5: '非居民过户',
					value6: 313134,
				},
			],
		})
		onMounted(() => {
			init()
		})
		const init = () => {}
		return {
			...toRefs(state),
		}
	},
})
</script>
