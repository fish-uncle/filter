<template lang="pug">
gc-left-view
	gc-box
		template(v-slot:left)
			left-one
		template(v-slot:right)
			left-two
	gc-box
		template(v-slot:left)
			left-three
		template(v-slot:right)
			left-four
	gc-box
		template(v-slot:left)
			left-five
		template(v-slot:right)
			left-six
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import LeftOne from './components/left-one.vue'
import LeftTwo from './components/left-two.vue'
import LeftThree from './components/left-three.vue'
import LeftFour from './components/left-four.vue'
import LeftFive from './components/left-five.vue'
import LeftSix from './components/left-six.vue'

export default defineComponent({
	name: 'CustomerServiceLeft',
	components: { LeftSix, LeftFive, LeftFour, LeftThree, LeftOne, LeftTwo },
	setup() {
		const state = reactive({})
		return {
			...toRefs(state),
		}
	},
})
</script>
