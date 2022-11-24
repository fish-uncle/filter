<template lang="pug">
gc-title(label="工商户行业用气量同比")
	gc-tab2(@init="init", @change="init")
.fn-flex(style="margin-top: 18px")
	gc-line2(v-model="list", unit="万m³", :legend="legend")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { leftSixApi } from '@/api/customer-service.api'
import { addYears, getYear } from 'date-fns'

export default defineComponent({
	name: 'LeftSix',
	setup() {
		const state = reactive({
			list: [],
			legend: [getYear(new Date()), getYear(addYears(new Date(), -1)), getYear(addYears(new Date(), -2))],
		})
		const init = async type => {
			const res = await leftSixApi(type)
			state.list = res.list
		}
		return {
			...toRefs(state),
			init,
		}
	},
})
</script>
