<template lang="pug">
gc-title(label="年度装表换表拆表")
.fn-flex(style="margin-top: 18px")
	gc-line5(v-model="list", unit="个", :legend="legend", :color="color")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import { left1SixApi } from '@/api/workorder-payment.api'

export default defineComponent({
	name: 'Left1Six',
	setup() {
		const state = reactive({
			list: [],
			legend: ['装表', '拆表', '换表'],
			color: ['#34B5F2', '#FF902A', '#3C72FD'],
		})
		const init = async () => {
			const res = await left1SixApi()
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
