<template lang="pug">
gc-left-view
	gc-box
		template(v-slot:left)
			gc-title(label="用户组成")
				gc-tab1
		template(v-slot:right)
			gc-title(label="用气性质分析")
				gc-tab1
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

export default defineComponent({
	name: 'CustomerServiceLeft',
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
