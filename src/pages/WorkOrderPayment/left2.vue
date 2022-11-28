<template lang="pug">
gc-view-left
	gc-box(:left-width="560", :right-width="560")
		template(v-slot:left)
			left2-one
		template(v-slot:right)
			left2-two
	gc-box(:left-width="560", :right-width="560")
		template(v-slot:left)
			left2-three
		template(v-slot:right)
			left2-four
	gc-box(:width="1120")
		left2-five
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Left2One from './components/left-2-one.vue'
import Left2Two from './components/left-2-two.vue'
import Left2Three from './components/left-2-three.vue'
import Left2Four from './components/left-2-four.vue'
import Left2Five from './components/left-2-five.vue'

export default defineComponent({
	name: 'WorkOrderPaymentLeft2',
	components: { Left2Five, Left2Four, Left2Three, Left2Two, Left2One },
})
</script>
