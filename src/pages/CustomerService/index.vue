<template lang="pug">
gc-view-top
	gc-center-title(label="总营收", v-model="total")
customer-service-left
customer-service-right
</template>
<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue'
import CustomerServiceLeft from './left.vue'
import CustomerServiceRight from './right.vue'

export default defineComponent({
	name: 'CustomerService',
	components: {
		CustomerServiceRight,
		CustomerServiceLeft,
	},
	setup() {
		const state = reactive({
			total: 931480,
		})
		return {
			...toRefs(state),
		}
	},
})
</script>
