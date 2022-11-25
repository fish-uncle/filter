<template lang="pug">
gc-title(label="工单类型")
	gc-date1(@init="init", @change="init")
.fn-flex(style="margin-top: 0px")
	gc-pie1(v-model="list", unit="户", size="mini")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { rightFiveApi } from '@/api/customer-service.api'

export default defineComponent({
	name: 'RightFive',
	setup() {
		const state = reactive({
			list: [],
		})
		const init = async type => {
			const res = await rightFiveApi(type)
			state.list = res.list
		}
		return {
			...toRefs(state),
			init,
		}
	},
})
</script>
