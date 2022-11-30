<template lang="pug">
gc-title(label="抄表率分析")
	gc-enlarge(label="抄表率分析", :width="894", :height="636")
		enlarge-right-two
.fn-flex(style="margin-top: 12px")
gc-line6(v-model="list", :unit="['数', '%']", :legend="legend")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import { rightTwoApi } from '@/api/workorder-payment.api'
import EnlargeRightTwo from '../enlarge/right-two.vue'

export default defineComponent({
	name: 'RightTwo',
	components: { EnlargeRightTwo },
	setup() {
		const state = reactive({
			list: [],
			legend: ['计划抄表数', '实际抄表数', '抄表率'],
		})
		const init = async () => {
			const res = await rightTwoApi()
			state.list = res.list
		}
		onMounted(async () => {
			await init()
		})
		return {
			...toRefs(state),
		}
	},
})
</script>
<style lang="scss" scoped></style>
