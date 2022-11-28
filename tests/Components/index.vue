<template lang="pug">
div
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
export default defineComponent({
	setup() {
		onMounted(() => {
			const context = require.context('../../src/components', true, /\.(index.png)$/)
			const picture = []
			context.keys().forEach(name => {
				console.log(name)
				picture.push(context(name))
			})
			console.log(picture)
		})
	},
})
</script>
