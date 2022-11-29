<template lang="pug">
gc-title(label="重大隐患处理")
	gc-date1(@init="init", @change="init")
.fn-flex(style="margin-top: 24px")
	gc-pie5(v-model="ratio")
	.left-2-three.fn-flex.flex-column
		.left-2-three-item.fn-flex
			label 重大隐患总数
			span 1
		.left-2-three-item.fn-flex
			label 上月剩余隐患数
			span 1
		.left-2-three-item.fn-flex
			label 本月发现隐患数
			span 1
		.left-2-three-item.fn-flex
			label 本月已处理隐患数
			span 1
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
	name: 'Left2Three',
	setup() {
		const state = reactive({
			list: [],
			ratio: 44,
		})
		const init = async () => {}
		return {
			...toRefs(state),
			init,
		}
	},
})
</script>
<style lang="scss" scoped>
.left-2-three {
	margin-left: 24px;
	margin-top: 12px;
}
.left-2-three-item {
	width: 342px;
	height: 44px;
	background: rgba(0, 100, 156, 0.3);
	padding: 10px 16px;
	align-items: center;
	justify-content: center;

	+ .left-2-three-item {
		margin-top: 8px;
	}
	label {
		color: #ffffff;
		font-weight: 400;
		font-size: 16px;
	}
	span {
		font-weight: 700;
		font-size: 24px;
		color: #00ddff;
		margin-left: auto;
	}
}
</style>
