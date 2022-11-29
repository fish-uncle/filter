<template lang="pug">
.gc-enlarge.cursor-pointer(@click="handlerClick")
teleport(to="#home-content", v-if="open1")
	transition(name="jump")
		.gc-enlarge-box.pos-f.fn-flex(v-if="open2")
			.gc-enlarge-bg.pos-a(@click="handlerClose")
			.gc-enlarge-container.pos-r(:style="{ width: `${width}px`, height: `${height}px` }")
				.gc-enlarge-header.pos-r.fn-flex
					span {{ label }}
					.gc-enlarge-close.cursor-pointer(@click="handlerClose")
				.gc-enlarge-content
					slot
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, nextTick } from 'vue'

export default defineComponent({
	name: 'GcEnlarge',
	props: {
		label: {
			type: String,
			default: '标题',
		},
		width: {
			type: Number,
			default: 746,
		},
		height: {
			type: Number,
			default: 460,
		},
	},
	emits: ['click', 'change', 'close'],
	// @ts-ignore
	setup(props, { emit }) {
		const state = reactive({
			open1: false,
			open2: false,
		})
		const handlerClose = async () => {
			state.open2 = false
			await nextTick()
			state.open1 = false
			emit('close')
			emit('change', state.open1)
		}
		const handlerClick = async () => {
			state.open1 = true
			await nextTick()
			state.open2 = true
			emit('click')
			emit('change', state.open1)
		}
		return {
			...toRefs(state),
			handlerClick,
			handlerClose,
		}
	},
})
</script>
<style lang="scss" scoped>
.gc-enlarge {
	user-select: none;
	width: 22px;
	height: 22px;
	background-image: url('../../imgs/gc-enlarge/icon.png');
	background-size: 22px;
	background-position: center;
	background-repeat: no-repeat;
}
.gc-enlarge-bg {
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
}
.gc-enlarge-content {
	padding: 12px 20px 26px 20px;
}
.gc-enlarge-header {
	padding: 7px 14px;
	background: rgba(0, 100, 156, 0.4);
	&:before,
	&:after {
		content: '';
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 2px;
		height: 20px;
		background: #ffffff;
	}
	&:before {
		left: 0;
	}
	&:after {
		right: 0;
	}
	span {
		font-weight: 600;
		font-size: 20px;
		color: #ffffff;
	}
}
.gc-enlarge-close {
	background-image: url('../../imgs/gc-enlarge/close.png');
	background-size: 24px;
	width: 24px;
	height: 24px;
	background-position: center;
	background-repeat: no-repeat;
	margin-left: auto;
}
.gc-enlarge-box {
	width: 100%;
	height: 100%;
	top: 50%;
	left: 50%;
	align-items: center;
	justify-content: center;
	transform: translateY(-50%) translateX(-50%) translate3d(0, 0, 0);
	transition: all 0.3s;
	z-index: 99;
	&.jump-enter-from,
	&.jump-leave-to {
		transform: translateY(0) translateX(-50%) translate3d(0, 0, 0);
		opacity: 0;
	}
	&.jump-enter-to,
	&.jump-leave-from {
		transform: translateY(-50%) translateX(-50%) translate3d(0, 0, 0);
		opacity: 1;
	}
}
.gc-enlarge-container {
	&:before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(0, 18, 38, 0.8);
		backdrop-filter: blur(15px);
		border-radius: 2px;
		z-index: -1;
		left: 0;
		top: 0;
	}
}
</style>
