<template lang="pug">
gc-title(label="业务类型占比")
	gc-date1(@init="init", @change="init")
.fn-flex(style="margin-top: 12px")
	gc-pie2(v-model="list")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { rightTwoApi } from '@/api/customer-service.api'

export default defineComponent({
	name: 'RightTwo',
	setup() {
		const state = reactive({
			list: [],
		})
		const init = async type => {
			const res = await rightTwoApi(type)
			state.list = res.list
		}
		return {
			...toRefs(state),
			init,
		}
	},
})
</script>
