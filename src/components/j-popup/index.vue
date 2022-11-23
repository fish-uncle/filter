<template>
	<transition name="jump">
		<div v-show="currentValue" class="j-popup">
			<div class="popup" :style="`width: ${width}px;height: ${height}px;`">
				<img class="corner-top-left" src="../../imgs/jiance/corner-top-left.webp" />
				<img class="corner-top-right corner" src="../../imgs/jiance/corner-top-right.webp" />
				<img class="corner-bottom-left corner" src="../../imgs/jiance/corner-bottom-left.webp" />
				<img class="corner-bottom-right corner" src="../../imgs/jiance/corner-bottom-right.webp" />
				<div class="close-btn" @click="handleCloseClick"></div>
				<slot></slot>
			</div>
		</div>
	</transition>
</template>
<script>
import { watch, reactive, toRefs } from 'vue'
export default {
	name: 'JPopup',
	props: {
		width: {
			type: Number,
			default: 1188,
		},
		height: {
			type: Number,
			default: 760,
		},
		modelValue: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['update:modelValue'],
	setup(props, { emit }) {
		const state = reactive({
			currentValue: props.modelValue,
		})
		watch(
			() => props.modelValue,
			val => {
				state.currentValue = val
			},
		)
		const handleCloseClick = () => {
			state.currentValue = false
			emit('update:modelValue', state.currentValue)
		}
		return {
			...toRefs(state),
			handleCloseClick,
		}
	},
}
</script>
<style lang="scss" scoped>
.j-popup {
	position: fixed;
	top: 50%;
	left: 50%;
	z-index: 100;
	transform: translateY(-50%) translateX(-50%) translate3d(0, 0, 0);
	transition: all 0.3s linear;
	&.jump-enter-from,
	&.jump-leave-to {
		transform: translateY(-100%) translateX(-50%) translate3d(0, 0, 0);
		opacity: 0;
	}
	&.jump-enter-to,
	&.jump-leave-from {
		transform: translateY(-50%) translateX(-50%) translate3d(0, 0, 0);
		opacity: 1;
	}
	.popup {
		position: relative;
		padding: 18px;
		border: 2px solid #3b9aff;
		background: #00153a;
		.corner-top-left {
			position: absolute;
			width: 182px;
			height: 8px;
			top: -8px;
			left: 0;
		}
		.corner {
			position: absolute;
			width: 18px;
			height: 18px;
			&.corner-top-right {
				top: -3px;
				right: -3px;
			}
			&.corner-bottom-right {
				bottom: -3px;
				right: -3px;
			}
			&.corner-bottom-left {
				bottom: -3px;
				left: -3px;
			}
		}

		.close-btn {
			cursor: pointer;
			position: absolute;
			margin-top: 21px;
			right: 27px;
			width: 32px;
			height: 32px;
			background: url('../../imgs/jiance/icon-close.webp') no-repeat #000b1f;
			background-position: center;
			background-size: 13.4px 13.4px;
			border: 2px solid #63b4ff;
		}
	}
}
</style>
