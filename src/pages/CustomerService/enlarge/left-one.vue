<template lang="pug">
.enlarge-left-one.fn-flex.flex-column
	gc-date1(style="margin-left: auto", @init="init", @change="init") 
	gc-table(:stripe="true", :columns="columns", v-model="list")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
	name: 'EnlargeLeftOne',
	setup() {
		const state = reactive({
			columns: [
				{ label: '区域名称', key: 'value1', width: 140 },
				{ label: '小区数量', key: 'value2', width: 174 },
				{ label: '居民户数', key: 'value3', width: 196 },
				{ label: '非居民户数', key: 'value4', width: 196 },
			],
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
