<template lang="pug">
gc-title(label="业务工单完成情况")
	gc-date1(@init="init", @change="init")
.right-four.fn-flex(style="margin-top: 20px")
	.right-four-left.fn-flex.flex-column
		i.pos-r
		h2 本月工单总计
		h3.font-num {{ total }}
		h4 (件)
	ul.right-four-right
		li.fn-flex
			label 本月已完成工单
			span.font-num {{ complete }}
		li.fn-flex
			label 本月未完成工单
			span.font-num {{ inComplete }}
		li.fn-flex
			label 本月超时未完成工单
			span.font-num {{ overtime }}
		li.fn-flex
			label 本月工单完成率
			span.font-num {{ ratio }}%
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { rightFourApi } from '@/api/customer-service.api'

export default defineComponent({
	name: 'RightFour',
	setup() {
		const state = reactive({
			complete: 0,
			inComplete: 0,
			overtime: 0,
			ratio: 0,
			total: 0,
		})
		const init = async type => {
			const res = await rightFourApi(type)
			state.complete = res.complete
			state.inComplete = res.inComplete
			state.overtime = res.overtime
			state.ratio = res.ratio
			state.total = res.total
		}
		return {
			...toRefs(state),
			init,
		}
	},
})
</script>
<style lang="scss" scoped>
.right-four {
	user-select: none;
}
.right-four-left {
	align-items: center;
	justify-content: center;
	width: 130px;
	height: 195px;
	margin-right: 18px;
	background: rgba(0, 100, 156, 0.2);
	border-radius: 2px;
	i {
		width: 56px;
		height: 56px;
		border: 1px dashed #2ba7c7;
		border-radius: 56px;
		background: rgba(0, 68, 131, 0.6);
		&:before {
			position: absolute;
			content: '';
			background-image: url('../../../imgs/customer-service/right-four/icon.png');
			background-color: #004483;
			background-position: center;
			background-repeat: no-repeat;
			background-size: 32px;
			width: 48px;
			height: 48px;
			border-radius: 48px;
			top: 50%;
			left: 50%;
			transform: translateX(-50%) translateY(-50%);
		}
	}
	h2 {
		margin: 10px 0 6px 0;
		font-weight: 400;
		font-size: 18px;
		line-height: 24px;
		color: rgba(255, 255, 255, 0.75);
	}
	h3 {
		font-weight: 700;
		font-size: 32px;
		line-height: 32px;
		color: #ffffff;
	}
	h4 {
		margin-top: 6px;
		font-weight: 400;
		font-size: 16px;
		line-height: 16px;
		color: rgba(255, 255, 255, 0.75);
	}
}
.right-four-right {
	flex: 1;
	li {
		width: 100%;
		background: rgba(0, 100, 156, 0.2);
		border-radius: 2px;
		align-items: center;
		height: 42px;
		padding: 0 16px;
		+ li {
			margin-top: 9px;
		}
		label {
			font-weight: 400;
			font-size: 16px;
			color: rgba(255, 255, 255, 0.75);
		}
		span {
			margin-top: 4px;
			margin-left: auto;
			font-weight: 700;
			font-size: 24px;
		}
		&:nth-child(1) {
			span {
				color: #3be8ff;
			}
		}
		&:nth-child(2) {
			span {
				color: #e5615b;
			}
		}
		&:nth-child(3) {
			span {
				color: #ff9b25;
			}
		}
		&:nth-child(4) {
			span {
				color: #ffffff;
			}
		}
	}
}
</style>
