<template lang="pug">
gc-view-top
	gc-center-title(label="总营收", v-model="total")
customer-service-left
customer-service-right
map-marker
</template>
<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted } from 'vue'
import CustomerServiceLeft from './left.vue'
import CustomerServiceRight from './right.vue'
import MapMarker from './map/marker.vue'

export default defineComponent({
	name: 'CustomerService',
	components: {
		MapMarker,
		CustomerServiceRight,
		CustomerServiceLeft,
	},
	setup() {
		const state = reactive({
			total: 931480,
		})
		onMounted(() => {
		})
		return {
			...toRefs(state),
		}
	},
})
</script>
