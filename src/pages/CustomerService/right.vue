<template lang="pug">
gc-view-right
	gc-box(:width="966")
		right-one
	gc-box(:left-width="560", :right-width="406")
		template(v-slot:left)
			right-two
		template(v-slot:right)
			right-three
	gc-box(:left-width="560", :right-width="406")
		template(v-slot:left)
			right-four
		template(v-slot:right)
			right-five
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import RightOne from './components/right-one.vue'
import RightTwo from './components/right-two.vue'
import RightThree from './components/right-three.vue'
import RightFour from './components/right-four.vue'
import RightFive from './components/right-five.vue'

export default defineComponent({
	name: 'CustomerServiceRight',
	components: { RightFive, RightFour, RightThree, RightOne, RightTwo },
	setup() {
		const state = reactive({})
		return {
			...toRefs(state),
		}
	},
})
</script>
