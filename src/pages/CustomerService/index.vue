<template lang="pug">
customer-service-left
customer-service-right
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import CustomerServiceLeft from './left.vue'
import CustomerServiceRight from './right.vue'

export default defineComponent({
	name: 'CustomerService',
	components: {
		CustomerServiceRight,
		CustomerServiceLeft,
	},
})
</script>
