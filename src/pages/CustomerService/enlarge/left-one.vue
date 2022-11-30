<template lang="pug">
.enlarge-left-one.fn-flex.flex-column
	gc-date1(style="margin-left: auto", @init="init", @change="init") 
	gc-table
		thead
			tr
				td 区域名称
				td 小区数量
				td 居民户数
				td 非居民户数
		tbody
			tr(v-for="(item, index) in list", :key="index")
				td {{ item.value1 }}
				td {{ item.value2 }}
				td {{ item.value3 }}
				td {{ item.value4 }}
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
	name: 'EnlargeLeftOne',
	setup() {
		const state = reactive({
			list: [
				{ value1: '魏塘街道', value2: 313134, value3: 313134, value4: 313134 },
				{ value1: '魏塘街道', value2: 313134, value3: 313134, value4: 313134 },
				{ value1: '魏塘街道', value2: 313134, value3: 313134, value4: 313134 },
				{ value1: '魏塘街道', value2: 313134, value3: 313134, value4: 313134 },
				{ value1: '魏塘街道', value2: 313134, value3: 313134, value4: 313134 },
				{ value1: '魏塘街道', value2: 313134, value3: 313134, value4: 313134 },
				{ value1: '魏塘街道', value2: 313134, value3: 313134, value4: 313134 },
				{ value1: '魏塘街道', value2: 313134, value3: 313134, value4: 313134 },
				{ value1: '魏塘街道', value2: 313134, value3: 313134, value4: 313134 },
			],
		})
		const init = () => {}
		return {
			...toRefs(state),
			init,
		}
	},
})
</script>
<style lang="scss" scoped>
.enlarge-left-one {
	width: 100%;
}
</style>
