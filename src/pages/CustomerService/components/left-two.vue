<template lang="pug">
gc-title(label="用气性质分析")
	gc-tab1(@init="init", @change="init")
	gc-enlarge
.fn-flex(style="margin-top: 20px")
	.fn-flex.flex-column(style="width: 100%; padding: 0 12px")
		gc-progress(
			:label="item.label",
			:value="item.value",
			v-for="(item, index) in list",
			:key="index",
			unit="户",
			:ratio="item.ratio"
		)
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { leftTwoApi } from '@/api/customer-service.api'

export default defineComponent({
	name: 'LeftTwo',
	setup() {
		const state = reactive({
			list: [],
		})
		const init = async type => {
			const res = await leftTwoApi(type)
			state.list = res.list
		}
		return {
			...toRefs(state),
			init,
		}
	},
})
</script>
