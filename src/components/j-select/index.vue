<template>
	<div ref="selectRef" class="j-select">
		<div class="placeholder" @click="handlePlaceholderClick">
			<div class="value">{{ curItem?.label || (needAllSelected ? '全部' : '请选择') }}</div>
			<div class="icon-arrow" :class="showDropDown ? 'up' : 'down'">
				<img src="../../imgs/jiance/arrow-down.webp" alt="" />
			</div>
		</div>
		<transition name="slide">
			<div v-show="showDropDown" ref="dropDownRef" class="options">
				<div
					v-if="needAllSelected"
					class="option"
					:class="!curOption ? 'active' : ''"
					@click="handleOptionClick(null)"
				>
					全部
				</div>
				<div
					v-for="option in options"
					:key="option.value"
					class="option"
					:class="curOption === option.value ? 'active' : ''"
					@click="handleOptionClick(option.value)"
				>
					{{ option.label }}
				</div>
			</div>
		</transition>
	</div>
</template>
<script lang="ts">
import { PropType, computed, reactive, toRefs, ref, watch } from 'vue'
import useClickOutside from './useClickOutside'
interface IOption {
	value: string | number
	label: string
	[x: string]: any
}
export default {
	name: 'JSelect',
	props: {
		options: {
			type: Array as PropType<IOption[]>,
			default: () => {
				return []
			},
		},
		modelValue: {
			type: [String, Number],
			default: '',
		},
		needAllSelected: { type: Boolean, default: true },
	},
	emits: ['update:modelValue', 'on-select-change'],
	setup(props, { emit }) {
		const curOption = computed({
			get: () => {
				return props.modelValue
			},
			set: val => {
				emit('update:modelValue', val)
			},
		})
		const state = reactive({
			showDropDown: false,
		})
		const dropDownRef = ref(null)
		const selectRef = ref(null)
		const isClickOutside = useClickOutside(selectRef)
		watch(isClickOutside, val => {
			if (val && state.showDropDown) {
				state.showDropDown = false
			}
		})
		const curItem = computed(() => {
			return props.options.find(item => item.value === curOption.value)
		})

		const handlePlaceholderClick = () => {
			state.showDropDown = !state.showDropDown
		}
		const handleOptionClick = val => {
			curOption.value = val
			state.showDropDown = false
			emit('on-select-change', val)
		}

		return {
			curOption,
			curItem,
			handlePlaceholderClick,
			handleOptionClick,
			...toRefs(state),
			selectRef,
			dropDownRef,
		}
	},
}
</script>
<style lang="scss" scoped>
.j-select {
	display: inline-block;
	margin: 10px 0 8px;
	height: 40px;
	cursor: pointer;
	.placeholder {
		position: relative;
		height: 40px;
		line-height: 40px;
		padding: 0 12px;
		display: flex;
		align-items: center;
		cursor: pointer;
		.value {
			font-style: normal;
			font-weight: 400;
			font-size: 20px;
			color: #8ccbff;
		}
		.icon-arrow {
			margin-left: 8px;
			width: 15px;
			height: 8px;
			transform: translate3d(0, 0, 0);
			transition: transform ease-in-out 0.2s;
			&.up {
				transform: rotate(180deg) translate3d(0, 0, 0);
				transform-origin: center;
			}
			img {
				display: block;
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}
	}
	.options {
		position: absolute;
		width: 100px;
		background: #0d1e42;
		padding: 8px 0;
		overflow: hidden;
		transform-origin: top;
		transition: all 0.2s ease-in-out;
		transform: translate3d(0, 0, 0);
		&.slide-enter-from,
		&.slide-leave-to {
			transform: scaleY(0) translate3d(0, 0, 0);
			opacity: 0;
		}
		&.slide-enter-to,
		&.slide-leave-from {
			transform: scaleY(1) translate3d(0, 0, 0);
			opacity: 1;
		}
		.option {
			width: 100px;
			height: 30px;
			line-height: 30px;
			text-align: center;
			font-style: normal;
			cursor: pointer;
			font-weight: 400;
			font-size: 16px;
			color: rgba(255, 255, 255, 0.75);
			&:hover {
				background: rgba(99, 180, 255, 0.2);
				font-weight: 500;
				color: #ffffff;
			}
			&.active {
				background: rgba(99, 180, 255, 0.4);
				font-weight: 500;
				color: #ffffff;
			}
		}
	}
}
</style>
