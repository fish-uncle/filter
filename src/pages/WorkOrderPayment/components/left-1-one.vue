<template lang="pug">
gc-title(label="表数量分析")
	gc-tab1(@init="init", @change="init", :options="residentOptions")
	gc-enlarge(label="表数量分析", :width="752", :height="594")
		enlarge-left1-one
.fn-flex(style="margin-top: 18px")
	gc-pie3(v-model="list")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import EnlargeLeft1One from '../enlarge/left-1-one.vue'
import { left1OneApi } from '@/api/workorder-payment.api'
import { residentOptions } from '@/config'

export default defineComponent({
	name: 'Left1One',
	components: { EnlargeLeft1One },
	setup() {
		const state = reactive({
			list: [],
			residentOptions,
		})
		const init = async type => {
			const res = await left1OneApi(type)
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
