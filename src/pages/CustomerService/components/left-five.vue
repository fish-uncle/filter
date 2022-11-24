<template lang="pug">
gc-title(label="年度工商户行业分布")
.fn-flex(style="margin-top: 18px")
	gc-pie1(v-model="list", unit="户")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import { leftFiveApi } from '@/api/customer-service.api'

export default defineComponent({
	name: 'LeftFive',
	setup() {
		const state = reactive({
			list: [],
		})
		const init = async () => {
			const res = await leftFiveApi()
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
