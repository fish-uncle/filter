<template lang="pug">
gc-title(label="用气性质分析")
	gc-tab1(@init="init", @change="init", :options="residentOptions")
	gc-enlarge(label="用气性质分析", :width="746", :height="460")
		enlarge-left-two
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
import EnlargeLeftTwo from '../enlarge/left-two.vue'
import { residentOptions } from '@/config'

export default defineComponent({
	name: 'LeftTwo',
	components: { EnlargeLeftTwo },
	setup() {
		const state = reactive({
			list: [],
			residentOptions,
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
