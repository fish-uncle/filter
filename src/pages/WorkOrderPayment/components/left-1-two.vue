<template lang="pug">
gc-title(label="表类型趋势")
	gc-tab1(@init="init", @change="init", :options="yearMonthOptions")
.fn-flex(style="margin-top: 18px")
	gc-line5(v-model="list", unit="个", :legend="legend")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { left1TwoApi } from '@/api/workorder-payment.api'
import { yearMonthOptions } from '@/config'

export default defineComponent({
	name: 'Left1Two',
	setup() {
		const state = reactive({
			list: [],
			yearMonthOptions,
			legend: ['IC', '普表', '智能表'],
		})
		const init = async type => {
			const res = await left1TwoApi(type)
			state.list = res.list
		}
		return {
			...toRefs(state),
			init,
		}
	},
})
</script>
