<template lang="pug">
gc-title(label="工单类型")
.fn-flex(style="margin-top: 18px")
	.fn-flex.flex-column(style="margin-right: 16px")
	gc-pie1(v-model="list", unit="户", size="mini")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import { rightFiveApi } from '@/api/customer-service.api'

export default defineComponent({
	name: 'RightFive',
	setup() {
		const state = reactive({
			list: [],
		})
		const init = async () => {
			const res = await rightFiveApi()
			state.list = res.list
		}
		onMounted(async () => {
			await init()
		})
		return {
			...toRefs(state),
		}
	},
})
</script>
