<template lang="pug">
gc-title(label="服务")
.fn-flex.right-one(style="margin-top: 14px")
	.right-one-left
		.right-one-left-top.fn-flex
			.right-one-left-top-item.fn-flex.flex-column
				h2.font-num 32
				h3 坐席通话中
			.right-one-left-top-call.fn-flex.pos-r
				p.pos-a
				span.pos-a
				label.pos-a
			.right-one-left-top-item.fn-flex.flex-column
				h2.font-num 11
				h3 坐席等待中
		.right-one-left-bottom
			li.fn-flex
				i
				label 累计通话时长：
				h2.font-num 680230
				span 分钟
			li.fn-flex
				i
				label 平均通话时长：
				h2.font-num 3
				span 分钟
	ul.right-one-right
		ul.right-one-right-item
			li.fn-flex
				label 年累计接通次数(次)
				span.font-num 2
			.right-one-right-num.fn-flex
				.right-one-right-num-left.fn-flex
					i
					label 呼入：
					span.font-num 1
				.right-one-right-num-right.fn-flex
					i
					label 呼出：
					span.font-num 1
		li.fn-flex
			label 年累计接通次数(次)
			span.font-num 2
		li.fn-flex
			label 放弃呼叫(次)
			span.font-num 2
		li.fn-flex
			label 接通率
			span.font-num 2
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'

export default defineComponent({
	name: 'RightOne',
	setup() {
		const state = reactive({
			list: [],
		})
		const init = async () => {}
		onMounted(async () => {
			await init()
		})
		return {
			...toRefs(state),
		}
	},
})
</script>
<style lang="scss" scoped>
@keyframes animatedBackground {
	from {
		background-position: 0 0;
	}
	to {
		background-position: 100% 0;
	}
}
@keyframes animatedOpacity {
	from {
		opacity: 0.5;
	}
	to {
		opacity: 1;
	}
}
@keyframes animatedWidth {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
@keyframes animatedShake {
	0%,
	100% {
		transform: rotate(0) translateX(-50%);
	}
	10%,
	30%,
	50%,
	70%,
	90% {
		transform: rotate(-10deg) translateX(-50%);
	}
	20%,
	40%,
	60%,
	80% {
		transform: rotate(10deg) translateX(-50%);
	}
}
.right-one {
	user-select: none;
}
.right-one-left-bottom {
	margin-top: 15px;
	i {
		width: 32px;
		height: 32px;
		background-size: 32px;
		background-repeat: no-repeat;
		background-position: center;
		margin-right: 22px;
	}
	&:nth-child(1) {
		i {
			background-image: url('../../../imgs/customer-service/right-one/icon1.png');
		}
	}
	&:nth-child(2) {
		i {
			background-image: url('../../../imgs/customer-service/right-one/icon2.png');
		}
	}
	li {
		align-items: center;
	}
	label {
		font-weight: 400;
		font-size: 18px;
		color: #00ddff;
	}
	h2 {
		font-weight: 700;
		font-size: 32px;
		color: #fff;
		margin: 4px 14px 0 auto;
	}
	span {
		font-weight: 400;
		font-size: 18px;
		color: rgba(255, 255, 255, 0.75);
	}
}
.right-one-left {
	flex: 1;
}
.right-one-left-top {
	background-image: url('../../../imgs/customer-service/right-one/bg.png');
	background-size: 460px 46px;
	background-repeat: no-repeat;
	background-position: bottom center;
	align-items: center;
	justify-content: center;
	padding-top: 48px;
	height: 123px;
}
.right-one-left-top-call {
	width: 160px;
	height: 123px;
	top: -25px;
	&:before {
		content: '';
		position: absolute;
		width: 102px;
		height: 106px;
		left: 50%;
		transform: rotate(0) translateX(-50%);
		background-size: 102px 106px;
		background-image: url('../../../imgs/customer-service/right-one/audio-bg.png');
	}
	&:after {
		content: '';
		position: absolute;
		width: 83px;
		height: 83px;
		left: 50%;
		transform: translateX(-50%);
		background-size: 83px 83px;
		background-image: url('../../../imgs/customer-service/right-one/call-bg.png');
		opacity: 0.5;
		animation: animatedOpacity 2s infinite ease-in-out;
	}
	label {
		position: absolute;
		width: 15px;
		height: 15px;
		top: 20px;
		left: 90px;
		background-size: 15px;
		background-image: url('../../../imgs/customer-service/right-one/call-des.png');
		animation: animatedWidth 2s infinite ease-in-out;
	}
	span {
		position: absolute;
		width: 40px;
		height: 48px;
		left: 50%;
		top: 15px;
		transform: translateX(-50%);
		background-size: 40px 48px;
		background-image: url('../../../imgs/customer-service/right-one/call.png');
		animation: animatedShake 2s infinite ease-in-out;
	}
	p {
		width: 47px;
		height: 18px;
		left: 50%;
		top: 70px;
		transform: translateX(-50%);
		background-size: 94px 18px;
		background-repeat: repeat-x;
		background-position: 0 0;
		background-image: url('../../../imgs/customer-service/right-one/audio.png');
		animation: animatedBackground 2s infinite ease-in-out;
	}
}
.right-one-left-top-item {
	flex: 1;
	align-items: center;
	height: 123px;
	h2 {
		font-weight: 700;
		font-size: 32px;
		color: #ffffff;
		margin-bottom: 8px;
	}
	h3 {
		font-weight: 400;
		font-size: 18px;
		color: #3be8ff;
	}
}
.right-one-right-num {
	background: rgba(0, 100, 156, 0.2);
	margin-bottom: 4px;
	padding: 10px 16px;
	i {
		width: 10px;
		height: 10px;
		background: #3be8ff;
		transform: rotate(45deg);
		margin-right: 6px;
	}
	label {
		font-weight: 400;
		font-size: 14px;
		color: rgba(255, 255, 255, 0.75);
	}
	span {
		font-weight: 700;
		font-size: 18px;
		color: #00ffcf;
		margin-top: 4px;
	}
}
.right-one-right-num-left {
	align-items: center;
}
.right-one-right-num-right {
	align-items: center;
	margin-left: auto;
}
.right-one-right {
	margin-left: 60px;
	width: 400px;
	li {
		width: 100%;
		background: rgba(0, 100, 156, 0.2);
		align-items: center;
		height: 42px;
		padding: 0 16px;
		+ li {
			margin-top: 4px;
		}
		label {
			font-weight: 400;
			font-size: 18px;
			color: rgba(255, 255, 255, 0.75);
		}
		span {
			margin-top: 4px;
			margin-left: auto;
			font-weight: 700;
			font-size: 28px;
		}
		&:nth-child(1) {
			span {
				color: #3be8ff;
			}
		}
		&:nth-child(2) {
			span {
				color: #3be8ff;
			}
		}
		&:nth-child(3) {
			span {
				color: #e5615b;
			}
		}
		&:nth-child(4) {
			span {
				color: #ff9b25;
			}
		}
	}
}
</style>
