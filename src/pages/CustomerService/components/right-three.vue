<template lang="pug">
gc-title(label="回访分析")
	gc-tab2(@init="init", @change="init")
.fn-flex(style="margin-top: 18px")
	.fn-flex.flex-column(style="margin-right:16px;")
		gc-target(label="用户总数", v-model="total")
		gc-target(label="居民户", v-model="total1")
		gc-target(label="非居民户", v-model="total2")
	gc-line1(v-model="list", unit="万户")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { leftOneApi } from '@/api/customer-service.api'

export default defineComponent({
	name: 'RightThree',
	setup() {
		const state = reactive({
			total: 0,
			total1: 0,
			total2: 0,
			list: [],
		})
		const init = async type => {
			const res = await leftOneApi(type)
			state.total = res.total
			state.total1 = res.total1
			state.total2 = res.total2
			state.list = res.list
		}
		return {
			...toRefs(state),
			init,
		}
	},
})
</script>
