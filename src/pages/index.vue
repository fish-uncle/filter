<template lang="pug">
#home-container.home-container.fn-flex
	#home-content.home-content.pos-r
		home-map
		home-bg
		home-nav
		customer-service(v-if="isCustomerService")
		work-order-payment(v-if="isWorkOrderPayment")
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import HomeMap from './Map/index.vue'
import HomeNav from './Nav/index.vue'
import HomeBg from './Bg/index.vue'
import CustomerService from './CustomerService/index.vue'
import WorkOrderPayment from './WorkOrderPayment/index.vue'
import Screen from '@/core/Screen'
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/store'

export default defineComponent({
	components: {
		HomeMap,
		HomeNav,
		HomeBg,
		CustomerService,
		WorkOrderPayment,
	},
	setup() {
		const commonStore = useCommonStore()
		const { isCustomerService, isWorkOrderPayment } = storeToRefs(commonStore)
		onMounted(() => {
			const screen: Screen = Screen.Instance()
			screen.init()
		})
		return {
			isCustomerService,
			isWorkOrderPayment,
		}
	},
})
</script>
<style lang="scss" scoped>
.home-content {
	flex-shrink: 0;
	overflow: hidden;
}
.home-container {
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	&::-webkit-scrollbar {
		width: 0;
		height: 0;
	}
}
</style>
