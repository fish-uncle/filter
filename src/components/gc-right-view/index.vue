<template lang="pug">
.gc-right-view.pos-a
	slot
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'GcRightView',
})
</script>
<style lang="scss" scoped>
.gc-right-view {
	right: 20px;
	top: 86px;
}
</style>
