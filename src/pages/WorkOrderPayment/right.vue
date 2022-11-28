<template lang="pug">
gc-view-right
	gc-box(:left-width="600", :right-width="450")
		template(v-slot:left)
			right-one
		template(v-slot:right)
			right-two
	gc-box(:left-width="600", :right-width="450")
		template(v-slot:left)
			right-three
		template(v-slot:right)
			right-four
	gc-box(:left-width="600", :right-width="450")
		template(v-slot:left)
			right-five
		template(v-slot:right)
			right-six
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import RightOne from './components/right-one.vue'
import RightTwo from './components/right-two.vue'
import RightThree from './components/right-three.vue'
import RightFour from './components/right-four.vue'
import RightFive from './components/right-five.vue'
import RightSix from './components/right-six.vue'

export default defineComponent({
	name: 'WorkOrderPaymentRight',
	components: { RightSix, RightFive, RightFour, RightThree, RightTwo, RightOne },
})
</script>
