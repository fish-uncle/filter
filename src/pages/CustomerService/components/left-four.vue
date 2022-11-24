<template lang="pug">
gc-title(label="开户点火渠道分析")
	gc-date1(@init="init", @change="init")
.fn-flex(style="margin-top: 18px")
	gc-line1(v-model="list", unit="万户")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { leftOneApi } from '@/api/customer-service.api'

export default defineComponent({
	name: 'LeftFour',
	setup() {
		const state = reactive({
			list: [],
		})
		const init = async type => {
			const res = await leftOneApi(type)
			state.list = res.list
		}
		return {
			...toRefs(state),
			init,
		}
	},
})
</script>
