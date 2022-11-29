<template lang="pug">
gc-title(label="隐患类型分布")
.left-2-four.fn-flex.flex-column
	.left-2-four-item.fn-flex(v-for="(item, index) in list" :key="index")
		i.fn-flex {{ index + 1 }}
		p.fn-flex.flex-column
			.fn-flex
				label {{ item.label }}
				span {{ item.value }}
			.left-2-four-item-line-box.pos-r
				.left-2-four-item-line.pos-a(:style="{ width: `${item.ratio}%` }")
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { left2FourApi } from '@/api/workorder-payment.api'

export default defineComponent({
	name: 'Left2Four',
	setup() {
		const state = reactive({
			list: [],
		})
		const init = async () => {
			const res = await left2FourApi()
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
.left-2-four {
	margin-top: 12px;
	user-select: none;
}
.left-2-four-item {
	align-items: center;
	justify-content: center;
	+ .left-2-four-item {
		margin-top: 20px;
	}
	&:nth-child(1) {
		.left-2-four-item-line {
			background: linear-gradient(270deg, #ff7217 0%, rgba(255, 114, 23, 0) 100%);
		}
		i {
			background: #ff7217;
		}
	}
	&:nth-child(2),
	&:nth-child(3) {
		i {
			background: #0057a9;
		}
	}
	i {
		font-style: normal;
		width: 24px;
		height: 28px;
		font-weight: 700;
		font-size: 18px;
		color: #fff;
		background: rgba(255, 255, 255, 0.2);
		align-items: center;
		justify-content: center;
		margin-right: 10px;
	}
	label {
		font-weight: 400;
		font-size: 16px;
		color: #f9f9f9;
		margin-bottom: 8px;
	}
	span {
		font-weight: 400;
		font-size: 16px;
		color: #ffffff;
		margin-left: auto;
	}
}
.left-2-four-item-line-box {
	width: 492px;
	background: rgba(255, 255, 255, 0.1);
	height: 4px;
}
.left-2-four-item-line {
	height: 4px;
	top: 0;
	left: 0;
	background: linear-gradient(270deg, #00ddff 0%, rgba(0, 221, 255, 0) 100%);
}
</style>
