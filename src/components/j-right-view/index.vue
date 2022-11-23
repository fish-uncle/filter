<template lang="pug">
//- transition(name="slide-right-fade")
.j-right-view.pos-a(v-if="show")
	slot
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'JRightView',
	props: {
		show: {
			type: Boolean,
			default: false,
		},
	},
})
</script>
<style lang="scss" scoped>
.j-right-view {
	right: 56px;
	top: 120px;
	height: calc(100% - 260px);
	// transform: translateX(0) translate3d(0, 0, 0);
	// transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-right-fade-enter-from,
.slide-right-fade-leave-to {
	transform: translateX(585px) translate3d(0, 0, 0);
	opacity: 0;
}
.slide-right-fade-enter-to,
.slide-right-fade-leave-from {
	transform: translateX(0) translate3d(0, 0, 0);
	opacity: 1;
}
</style>
