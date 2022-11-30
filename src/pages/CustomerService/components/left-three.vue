<template lang="pug">
gc-title(label="近12月客户新增")
	gc-tab1(@init="init", @change="init")
	gc-enlarge(label="近12月客户新增", :width="746", :height="460")
		enlarge-left-three
.fn-flex(style="margin-top: 18px")
	gc-line3(v-model="list", :unit="['万户', '%']", :legend="legend")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { leftThreeApi } from '@/api/customer-service.api'
import EnlargeLeftThree from '../enlarge/left-three.vue'

export default defineComponent({
	name: 'LeftThree',
	components: { EnlargeLeftThree },
	setup() {
		const state = reactive({
			list: [],
			legend: ['新增户数', '去年同期', '环比'],
		})
		const init = async type => {
			const res = await leftThreeApi(type)
			state.list = res.list
		}
		return {
			...toRefs(state),
			init,
		}
	},
})
</script>
