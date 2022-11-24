<template lang="pug">
.gc-enlarge.cursor-pointer(@click="handlerClick")
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'GcEnlarge',
	props: {},
	// @ts-ignore
	setup(props, { emit }) {
		const handlerClick = () => {
			emit('click')
		}
		return {
			handlerClick,
		}
	},
})
</script>
<style lang="scss" scoped>
.gc-enlarge {
	user-select: none;
	width: 22px;
	height: 22px;
	background-image: url('../../imgs/gc-enlarge/icon.png');
	background-size: 22px;
	background-position: center;
	background-repeat: no-repeat;
}
</style>
