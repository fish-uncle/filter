<template lang="pug">
gc-title(label="大用户分析TOP10")
	.right-five-option.fn-flex
		.right-five-option-item.pos-r 月度环比
		.right-five-option-item.pos-r 年度同比
.right-five.fn-flex.flex-column
	.right-five-header.fn-flex
		span(style="margin-left: 45px; margin-right: 160px") 用户名
		span 本月用气(m³)/环比
		span(style="margin-left: 46px") 年度累计用气(m³)/同比
	.right-five-item.fn-flex(v-for="(item, index) in list" :key="index")
		i.font-num.fn-flex {{ index + 1 }}
		span.ellipsis(style="width: 208px") {{ item.company }}
		.right-five-item-box.fn-flex
			label {{ item.value1 }}
			.right-fiv-item-type.fn-flex
				span {{ item.type1 === 'down' ? '-' : '+' }}{{ item.ratio1 }}%
				img(:src="item.type1 === 'down' ? downIcon : upIcon")
		.right-five-item-divide
		.right-five-item-box.fn-flex
			label {{ item.value2 }}
			.right-fiv-item-type.right-fiv-item-type2.fn-flex
				span {{ item.type2 === 'down' ? '-' : '+' }}{{ item.ratio2 }}%
				img(:src="item.type2 === 'down' ? downIcon : upIcon")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import { rightFiveApi } from '@/api/workorder-payment.api'

const downIcon = require('@/imgs/workorder-payment/right-six/down.png')
const upIcon = require('@/imgs/workorder-payment/right-six/up.png')

export default defineComponent({
	name: 'RightFive',
	setup() {
		const state = reactive({
			list: [],
			downIcon,
			upIcon,
		})
		const init = async () => {
			const res = await rightFiveApi()
			state.list = res.list
		}
		onMounted(async () => {
			await init()
		})
		return {
			...toRefs(state),
			init,
		}
	},
})
</script>
<style lang="scss" scoped>
.right-five {
	margin-top: 12px;
}
.right-fiv-item-type {
	width: 83px;
	height: 24px;
	background: #145d86;
	border-radius: 4px;
	padding: 4px;
	align-items: center;
	justify-content: center;
	span{
		margin-right: auto;
	}
	img{
		
	}
}
.right-fiv-item-type2 {
	background: #0c4496;
}
.right-five-item {
	height: 32px;
	align-items: center;
	padding-left: 4px;
	+ .right-five-item {
		margin-top: 2px;
	}
	i {
		width: 24px;
		height: 24px;
		border: 1px solid #3ce8ff;
		color: #3ce8ff;
		align-items: center;
		justify-content: center;
		padding-top: 4px;
		margin-right: 8px;
		font-style: normal;
	}
	span {
		font-weight: 400;
		font-size: 16px;
		color: #ffffff;
	}
	&:nth-child(2),
	&:nth-child(3),
	&:nth-child(4) {
		i {
			background: #1d6a96;
			color: #ffffff;
			font-weight: 700;
			font-size: 16px;
		}
	}
	&:nth-child(2n) {
		background: rgba(0, 100, 156, 0.3);
	}
}
.right-five-item-divide {
	background: rgba(255, 255, 255, 0.4);
	width: 1px;
	height: 20px;
	margin: 0 20px 0 4px;
}
.right-five-item-box {
	width: 150px;
	label {
		font-weight: 400;
		font-size: 16px;
		color: #ffffff;
		margin-right: auto;
	}
}
.right-five-header {
	align-items: center;
	border-bottom: 1px solid #1d6a96;
	margin-bottom: 2px;
	height: 32px;
	span {
		font-weight: 400;
		font-size: 14px;
		white-space: nowrap;
		color: rgba(255, 255, 255, 0.75);
	}
}
.right-five-option-item {
	font-weight: 400;
	font-size: 14px;
	color: rgba(255, 255, 255, 0.75);
	padding-left: 20px;
	align-items: center;
	+ .right-five-option-item {
		margin-left: 24px;
	}
	&:before {
		content: '';
		position: absolute;
		width: 12px;
		height: 12px;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
	}
	&:first-child {
		&:before {
			background: #145d86;
		}
	}
	&:last-child {
		&:before {
			background: #0c4fb3;
		}
	}
}
</style>
