<template lang="pug">
//- transition(name="slide-top-fade")
.j-top-view.pos-a.fn-flex(v-if="show")
	slot
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'JTopView',
	props: {
		show: {
			type: Boolean,
			default: true,
		},
	},
})
</script>
<style lang="scss" scoped>
.j-top-view {
	top: 149px;
	justify-content: center;
	pointer-events: none;
	width: 100%;
	// transform: translateY(0) translate3d(0, 0, 0);
	// transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
	left: 0;
}
.slide-top-fade-enter-from,
.slide-top-fade-leave-to {
	transform: translateY(-100px) translate3d(0, 0, 0);
	opacity: 0;
}
.slide-top-fade-enter-to,
.slide-top-fade-leave-from {
	transform: translateY(0) translate3d(0, 0, 0);
	opacity: 1;
}
</style>
