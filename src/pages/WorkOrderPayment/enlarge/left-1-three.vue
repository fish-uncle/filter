<template lang="pug">
.enlarge-left-one.fn-flex.flex-column
	gc-date1(style="margin-left: auto" @init="init", @change="init")
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'EnlargeLeft1Three',
	setup() {
		const init = () => {}
		return {
			init,
		}
	},
})
</script>
