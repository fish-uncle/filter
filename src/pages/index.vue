<template lang="pug">
#home-container.home-container.fn-flex
	#home-content.home-content.pos-r
		home-map
		home-bg
		home-nav
		customer-service(v-if="nav.isCustomerService")
		work-order-payment(v-if="nav.isWorkOrderPayment")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import HomeMap from './Map/index.vue'
import HomeNav from './Nav/index.vue'
import HomeBg from './Bg/index.vue'
import CustomerService from './CustomerService/index.vue'
import WorkOrderPayment from './WorkOrderPayment/index.vue'
import Nav from '@/core/Nav'

export default defineComponent({
	name: 'Home',
	components: {
		HomeMap,
		HomeNav,
		HomeBg,
		CustomerService,
		WorkOrderPayment,
	},
	setup() {
		const state = reactive({
			nav: Nav.Instance() as Nav,
		})
		return {
			...toRefs(state),
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
