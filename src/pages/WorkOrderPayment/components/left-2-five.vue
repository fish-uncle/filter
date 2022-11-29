<template lang="pug">
gc-title(label="近12月安检入户率")
.fn-flex(style="margin-top: 12px")
gc-line7(v-model="list", :unit="['件', '%']", :legend="legend")
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { left2FiveApi } from '@/api/workorder-payment.api'

export default defineComponent({
	name: 'Left2Five',
	setup() {
		const state = reactive({
			list: [],
			legend: ['计划数', '入户数', '入户率'],
		})
		const init = async () => {
			const res = await left2FiveApi()
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
