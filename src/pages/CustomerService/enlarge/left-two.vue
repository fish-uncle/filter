<template lang="pug">
.enlarge-left-two.fn-flex.flex-column
	gc-date1(style="margin-left: auto", @init="init", @change="init")
	gc-table
		thead
			tr
				td 用户类型
				td 用气性质
				td 用户量
				td 同比
				td 环比
		tbody
			tr
				td 居民
				td 灶具
				td 313134
				td 90%
				td 90%
			tr
				td 居民
				td 灶具
				td 313134
				td 90%
				td 90%
			tr
				td 居民
				td 灶具
				td 313134
				td 90%
				td 90%
	gc-table
		thead
			tr
				td 用户类型
				td 用气性质
				td 用户量
				td 同比
				td 环比
		tbody
			tr
				td 非居民
				td 商业
				td 313134
				td 90%
				td 90%
			tr
				td 非居民
				td 工业
				td 313134
				td 90%
				td 90%
			tr
				td 非居民
				td 公建
				td 313134
				td 90%
				td 90%
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'EnlargeLeftTwo',
	setup() {
		const init = () => {}
		return {
			init,
		}
	},
})
</script>
<style lang="scss" scoped>
.enlarge-left-two {
	width: 100%;
}
</style>
