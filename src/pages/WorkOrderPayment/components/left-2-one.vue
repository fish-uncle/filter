<template lang="pug">
gc-title(label="安检分析")
	gc-date1(@init="init", @change="init")
	gc-enlarge(label="安检分析", :width="1196", :height="708")
		enlarge-left2-one
.fn-flex(style="margin-top: 12px")
	gc-pie6(label="完成率", v-model="ratio")
	.fn-flex.flex-column(style="justify-content: center; margin-left: 55px")
		gc-target3(:icon="icon1", label="计划安检数")
		gc-target3(:icon="icon2", label="安检完成数")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import EnlargeLeft2One from '../enlarge/left-2-one.vue'

const icon1 = require('@/imgs/workorder-payment/left-2-one/icon1.png')
const icon2 = require('@/imgs/workorder-payment/left-2-one/icon2.png')

export default defineComponent({
	name: 'Left2One',
	components: { EnlargeLeft2One },
	setup() {
		const state = reactive({
			ratio: 25,
			icon1,
			icon2,
			list: [],
		})
		const init = async () => {}
		return {
			...toRefs(state),
			init,
		}
	},
})
</script>
<style lang="scss" scoped></style>
