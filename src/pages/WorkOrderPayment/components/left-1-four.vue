<template lang="pug">
gc-title(label="异常报警")
.left-1-four
	.left-1-four-header.fn-flex
		span(style="width: 60px; margin-right: 84px; margin-left: 8px") 时间
		span(style="width: 146px; margin-right: 16px") 工商户
		span(style="width: 40px; margin-right: 84px") 地点
		span(style="width: 78px") 报警类型
	.left-1-four-list
		.left-1-four-list-item.fn-flex(v-for="(item, index) in list", :key="index")
			span.ellipsis(style="width: 106px; margin-right: 40px") {{ item.time }}
			span.ellipsis(style="width: 114px; margin-right: 48px") {{ item.name }}
			span.ellipsis(style="width: 114px; margin-right: 10px") {{ item.address }}
			label {{ item.warnType }}
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import { left1FourApi } from '@/api/workorder-payment.api'

export default defineComponent({
	name: 'Left1Four',
	setup() {
		const state = reactive({
			list: [],
		})
		const init = async () => {
			const res = await left1FourApi()
			state.list = res.list
		}
		onMounted(() => {
			init()
		})
		return {
			...toRefs(state),
		}
	},
})
</script>
<style lang="scss" scoped>
.left-1-four {
	margin-top: 12px;
	user-select: none;
}
.left-1-four-header {
	font-weight: 400;
	font-size: 14px;
	color: rgba(255, 255, 255, 0.75);
	border-bottom: 1px solid #1d6a96;
	height: 32px;
	align-items: center;
	margin-bottom: 4px;
}
.left-1-four-list-item {
	padding: 5px 6px;
	height: 32px;
	align-items: center;
	&:nth-child(2n + 1) {
		background: rgba(0, 100, 156, 0.3);
	}
	label {
		font-weight: 500;
		font-size: 16px;
		color: #ff7217;
	}
	span {
		font-weight: 400;
		font-size: 16px;
		color: #fff;
	}
}
</style>
