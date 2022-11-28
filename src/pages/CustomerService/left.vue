<template lang="pug">
gc-view-left
	gc-box(:left-width="560", :right-width="560")
		template(v-slot:left)
			left-one
		template(v-slot:right)
			left-two
	gc-box(:left-width="560", :right-width="560")
		template(v-slot:left)
			left-three
		template(v-slot:right)
			left-four
	gc-box(:left-width="560", :right-width="560")
		template(v-slot:left)
			left-five
		template(v-slot:right)
			left-six
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import LeftOne from './components/left-one.vue'
import LeftTwo from './components/left-two.vue'
import LeftThree from './components/left-three.vue'
import LeftFour from './components/left-four.vue'
import LeftFive from './components/left-five.vue'
import LeftSix from './components/left-six.vue'

export default defineComponent({
	name: 'CustomerServiceLeft',
	components: { LeftSix, LeftFive, LeftFour, LeftThree, LeftOne, LeftTwo },
})
</script>
