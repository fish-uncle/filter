<template lang="pug">
gc-view-left
	gc-box(:left-width="560", :right-width="560")
		template(v-slot:left)
			left1-one
		template(v-slot:right)
			left1-two
	gc-box(:left-width="560", :right-width="560")
		template(v-slot:left)
			left1-three
		template(v-slot:right)
			left1-four
	gc-box(:left-width="560", :right-width="560")
		template(v-slot:left)
			left1-five
		template(v-slot:right)
			left-1-six
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Left1One from './components/left-1-one.vue'
import Left1Two from './components/left-1-two.vue'
import Left1Three from './components/left-1-three.vue'
import Left1Four from './components/left-1-four.vue'
import Left1Five from './components/left-1-five.vue'
import Left1Six from './components/left-1-six.vue'

export default defineComponent({
	name: 'WorkOrderPaymentLeft1',
	components: { Left1Six, Left1Five, Left1Four, Left1Three, Left1Two, Left1One },
})
</script>
