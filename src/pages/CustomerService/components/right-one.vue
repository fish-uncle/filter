<template lang="pug">
gc-title(label="服务")
.fn-flex(style="margin-top: 18px")
	.fn-flex.flex-column(style="margin-right: 16px")
	gc-line1(v-model="list", unit="万户")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'

export default defineComponent({
	name: 'RightOne',
	setup() {
		const state = reactive({
			list: [],
		})
		const init = async () => {
			// const res = await leftOneApi()
			// state.list = res.list
		}
		onMounted(async () => {
			await init()
		})
		return {
			...toRefs(state),
		}
	},
})
</script>
