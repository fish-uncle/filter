<template lang="pug">
work-order-payment1
work-order-payment2
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useCommonStore } from '@/store'
import { storeToRefs } from 'pinia'
import WorkOrderPayment1 from '../WorkOrderPayment-1/index.vue'
import WorkOrderPayment2 from '../WorkOrderPayment-2/index.vue'

export default defineComponent({
	name: 'WorkOrderPayment',
	components: {
		WorkOrderPayment1,
		WorkOrderPayment2,
	},
	setup() {
		const commonStore = useCommonStore()
		const { isCustomerService } = storeToRefs(commonStore)
		const state = reactive({
			
		})
		return {
			...toRefs(state),
			isCustomerService,
		}
	},
})
</script>
