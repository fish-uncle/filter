<template>
	<div class="marquee-container">
		<div class="marquee" :style="style" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
			<slot
				v-for="(item, index) in menuList"
				:key="index"
				:item="item"
				:color="color[index % 4]"
				name="marqueeItem"
				:index="index"
			></slot>
		</div>
	</div>
</template>
<script lang="ts">
import { reactive, toRefs, onMounted, onBeforeUnmount, watch, computed } from 'vue'

export default {
	name: 'JMarquee',
	props: {
		color: {
			type: Array,
			default() {
				return ['#63B4FF', '#FCD756', '#2BFDB1', '#3058D0']
			},
		},
		itemHeight: {
			type: Number,
			default: 28,
		},
		list: {
			type: Array,
			default() {
				return []
			},
		},
		modelValue: {
			type: Number,
			default: 0,
		},
	},
	emits: ['update:modelValue'],
	setup(props, { emit }) {
		const state = reactive({
			currentValue: props.modelValue,
			menuList: props.list,
			top: 0,
			timer: null as any,
			showSize: 3,
		})
		const style = computed(() => {
			if (state.menuList.length <= state.showSize + 1) {
				return { transform: 'translateY(0px) translate3d(0, 0, 0)' }
			} else {
				if (state.currentValue > state.showSize) {
					const top = (state.currentValue - state.showSize) * props.itemHeight
					return { transform: `translateY(-${top}px) translate3d(0, 0, 0)` }
				} else {
					return { transform: 'translateY(0px) translate3d(0, 0, 0)' }
				}
			}
		})

		watch(
			() => props.modelValue,
			val => {
				state.currentValue = val
			},
		)
		watch(
			() => props.list,
			val => {
				state.menuList = val
			},
			{ deep: true },
		)

		const activateMarquee = () => {
			state.timer = setInterval(() => {
				if (state.currentValue >= state.menuList.length - 1) {
					state.currentValue = 0
				} else {
					state.currentValue = state.currentValue + 1
				}
				emit('update:modelValue', state.currentValue)
			}, 2000)
		}
		onMounted(async () => {
			activateMarquee()
		})
		onBeforeUnmount(() => {
			clearInterval(state.timer)
			state.timer = null
		})

		const handleMouseOut = () => {
			activateMarquee()
		}
		const handleMouseOver = () => {
			clearInterval(state.timer)
			state.timer = null
		}

		return {
			...toRefs(state),
			handleMouseOut,
			handleMouseOver,
			style,
		}
	},
}
</script>
<style lang="scss" scoped>
.marquee-container {
	width: 100%;
	overflow: hidden;
	position: relative;
	height: 112px;

	.marquee {
		position: absolute;
		width: 100%;
		transition: all 0.3s;
	}
}
</style>
