<template lang="pug">
gc-title(label="回访分析")
	gc-tab2(@init="init", @change="init")
.fn-flex(style="margin-top: 18px")
	gc-line4(v-model="list", :unit="['次', '%']", :legend="legend")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { rightThreeApi } from '@/api/customer-service.api'

export default defineComponent({
	name: 'RightThree',
	setup() {
		const state = reactive({
			list: [],
			legend: ['计划数', '完成数', '满意度'],
		})
		const init = async type => {
			const res = await rightThreeApi(type)
			state.list = res.list
		}
		return {
			...toRefs(state),
			init,
		}
	},
})
</script>
