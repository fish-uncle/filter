<template lang="pug">
gc-title(label="缴费方式")
	gc-tab1(@init="init", @change="init", :option="option")
.fn-flex(style="margin-top:12px")
gc-target2(label="本月总笔数：" unit="笔" :value="111")
gc-pie4(v-model="list", unit="台" size="mini")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { rightFourApi } from '@/api/workorder-payment.api'

export default defineComponent({
	name: 'RightFour',
	setup() {
		const state = reactive({
			list: [],
			option: [
				{ label: '月对比', value: '月对比' },
				{ label: '年对比', value: '年对比' },
			],
		})
		const init = async type => {
			const res = await rightFourApi(type)
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
