<template lang="pug">
gc-title(label="表具使用年限分析")
	gc-date1(@init="init", @change="init")
gc-pie4(v-model="list", unit="台")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { left1FiveApi } from '@/api/workorder-payment.api'

export default defineComponent({
	name: 'Left1Five',
	setup() {
		const state = reactive({
			list: [],
		})
		const init = async type => {
			const res = await left1FiveApi(type)
			state.list = res.list
		}
		return {
			...toRefs(state),
			init,
		}
	},
})
</script>
<style lang="scss" scoped></style>
