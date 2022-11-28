<template lang="pug">
gc-title(label="气量异常用户")
	gc-tab1(@init="init", @change="init", :option="option")
.fn-flex(style="margin-top: 10px")
gc-target2(label="本月低于前三月平均值50%", unit="")
.right-six.fn-flex.flex-column
	.right-six-item.fn-flex(v-for="item in list")
		i
		label.ellipsis {{ item.id }}
		p.ellipsis {{ item.address }}
		h2.ellipsis {{ item.value }}
		.right-six-item-type.fn-flex
			span {{ item.type === 'down' ? '-' : '+' }}{{ item.ratio }}%
			img(:src="item.type === 'down' ? downIcon : upIcon")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { rightSixApi } from '@/api/workorder-payment.api'

const downIcon = require('@/imgs/workorder-payment/right-six/down.png')
const upIcon = require('@/imgs/workorder-payment/right-six/up.png')

export default defineComponent({
	name: 'RightSix',
	setup() {
		const state = reactive({
			list: [],
			downIcon,
			upIcon,
			option: [
				{ label: '增加', value: '增加' },
				{ label: '减少', value: '减少' },
			],
		})
		const init = async type => {
			const res = await rightSixApi(type)
			state.list = res.list
		}
		return {
			...toRefs(state),
			init,
		}
	},
})
</script>
<style lang="scss" scoped>
.right-six-item {
	padding: 0 8px 0 6px;
	justify-content: center;
	align-items: center;
	height: 40px;
	margin-top: 3px;
	&:nth-child(2n + 1) {
		background: rgba(0, 100, 156, 0.3);
		backdrop-filter: blur(2px);
	}
	i {
		background-image: url('../../../imgs/workorder-payment/right-six/icon.png');
		background-size: 17px 16px;
		width: 17px;
		height: 16px;
		margin-right: 6px;
	}
	label {
		font-weight: 400;
		font-size: 16px;
		color: #fff;
		width: 93px;
	}
	p {
		font-weight: 400;
		font-size: 16px;
		color: #fff;
		width: 126px;
	}
	h2 {
		font-weight: 400;
		font-size: 16px;
		color: #fff;
		margin-right: auto;
	}
	.right-six-item-type {
		width: 83px;
		height: 24px;
		background: #0c4496;
		border-radius: 4px;
		padding: 4px;
		align-items: center;
		justify-content: center;
		img{
			margin-left: auto;
		}
		span {
			color: #fff;
		}
	}
}
</style>
