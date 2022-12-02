<template lang="pug">
gc-title(label="业务类型占比")
	gc-date1(@init="init", @change="init")
	gc-enlarge(label="线上业务受理分类" :width="1000" :height="330")
		enlarge-right-two
.fn-flex(style="margin-top: 12px")
	gc-pie2(v-model="list")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { rightTwoApi } from '@/api/customer-service.api'
import EnlargeRightTwo from '../enlarge/right-two.vue'

export default defineComponent({
	name: 'RightTwo',
	components: { EnlargeRightTwo },
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
