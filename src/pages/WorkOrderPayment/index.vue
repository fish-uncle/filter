<template lang="pug">
gc-view-top
	gc-center-title(label="总营收", v-model="total")
work-order-payment-left1(v-if="step === 1")
work-order-payment-left2(v-if="step === 2")
work-order-payment-right
gc-step(v-model="step")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useCommonStore } from '@/store'
import { storeToRefs } from 'pinia'
import WorkOrderPaymentLeft1 from '@/pages/WorkOrderPayment/left1.vue'
import WorkOrderPaymentLeft2 from '@/pages/WorkOrderPayment/left2.vue'
import WorkOrderPaymentRight from '@/pages/WorkOrderPayment/right.vue'

export default defineComponent({
	name: 'WorkOrderPayment',
	components: {
		WorkOrderPaymentLeft1,
		WorkOrderPaymentLeft2,
		WorkOrderPaymentRight,
	},
	setup() {
		const commonStore = useCommonStore()
		const { isCustomerService } = storeToRefs(commonStore)
		const state = reactive({
			step: 1,
			total: 931480,
		})
		return {
			...toRefs(state),
			isCustomerService,
		}
	},
})
</script>
