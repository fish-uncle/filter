<template lang="pug">
.gc-left-view.pos-a
	slot
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'GcLeftView',
})
</script>
<style lang="scss" scoped>
.gc-left-view {
	left: 20px;
	top: 98px;
}
</style>
