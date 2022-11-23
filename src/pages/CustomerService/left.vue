<template lang="pug">
gc-left-view
	gc-box
		template(v-slot:left)
			left-one
		template(v-slot:right)
			left-two
	gc-box
		template(v-slot:left)
			gc-title(label="近12月客户新增")
		template(v-slot:right)
			gc-title(label="开户点火渠道分析")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useCommonStore } from '@/store'
import { storeToRefs } from 'pinia'
import LeftOne from './components/left-one.vue'
import LeftTwo from './components/left-two.vue'

export default defineComponent({
	name: 'CustomerServiceLeft',
	components: { LeftOne,LeftTwo },
	setup() {
		const commonStore = useCommonStore()
		const { isCustomerService } = storeToRefs(commonStore)
		const state = reactive({})
		return {
			...toRefs(state),
			isCustomerService,
		}
	},
})
</script>
