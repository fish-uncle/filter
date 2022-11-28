<template lang="pug">
gc-title(label="抄表率分析")
	gc-enlarge
.fn-flex(style="margin-top: 12px")
gc-line6(v-model="list", :unit="['数', '%']", :legend="legend")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import { rightTwoApi } from '@/api/workorder-payment.api'

export default defineComponent({
	name: 'RightTwo',
	setup() {
		const state = reactive({
			list: [],
			legend: ['计划抄表数', '实际抄表数', '抄表率'],
		})
		const init = async () => {
			const res = await rightTwoApi()
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
<style lang="scss" scoped></style>
