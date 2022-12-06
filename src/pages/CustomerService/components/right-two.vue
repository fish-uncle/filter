<template lang="pug">
gc-title(label="业务类型占比")
	gc-date1(@init="init", @change="init")
	gc-enlarge(label="线上业务受理分类", :width="1000", :height="330")
		enlarge-right-two
.fn-flex(style="margin-top: 12px")
	gc-pie2(v-model="list", :icon="icon")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { rightTwoApi } from '@/api/customer-service.api'
import EnlargeRightTwo from '../enlarge/right-two.vue'

const icon1 = require('@/imgs/customer-service/right-two/icon1.png')
const icon2 = require('@/imgs/customer-service/right-two/icon2.png')
const icon3 = require('@/imgs/customer-service/right-two/icon3.png')
const icon4 = require('@/imgs/customer-service/right-two/icon4.png')

export default defineComponent({
	name: 'RightTwo',
	components: { EnlargeRightTwo },
	setup() {
		const state = reactive({
			list: [],
			icon: [icon1, icon2, icon3, icon4],
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
