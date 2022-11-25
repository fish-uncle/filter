<template lang="pug">
gc-title(label="开户点火渠道分析")
	gc-date1(@init="init", @change="init")
.fn-flex(style="margin-top: 18px")
	gc-pie3(v-model="list")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { leftFourApi } from "@/api/customer-service.api";

export default defineComponent({
	name: 'LeftFour',
	setup() {
		const state = reactive({
			list: [],
		})
		const init = async type => {
			const res = await leftFourApi(type)
			state.list = res.list
		}
		return {
			...toRefs(state),
			init,
		}
	},
})
</script>
