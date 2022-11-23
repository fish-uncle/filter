<template lang="pug">
.gc-tab.fn-flex
	.gc-tab-item.fn-flex.cursor-pointer(
		v-for="item in list",
		:key="item.value",
		:class="{ active: item.value === currentValue }",
		@click="handlerClick(item.value)"
	) {{ item.label }}
</template>
<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted } from 'vue'

export default defineComponent({
	name: 'GcTab1',
	emits: ['change', 'init'],
	// @ts-ignore
	setup(props, { emit }) {
		const state = reactive({
			currentValue: '居民',
			list: [
				{ label: '居民', value: '居民' },
				{ label: '非居民', value: '非居民' },
			],
		})
		const handlerClick = (value: string): void => {
			state.currentValue = value
			emit('change', value)
		}
		onMounted(() => {
			emit('init', state.currentValue)
		})
		return {
			handlerClick,
			...toRefs(state),
		}
	},
})
</script>
<style lang="scss" scoped>
.gc-tab {
	width: 110px;
}
.gc-tab-item {
	height: 24px;
	background: rgba(0, 100, 156, 0.4);
	border-radius: 4px;
	padding: 4px 8px;
	align-items: center;
	justify-content: center;
	color: rgba(255, 255, 255, 0.75);
	font-weight: 400;
	font-size: 14px;
	&.active {
		color: #02142d;
		font-weight: 500;
		background: rgba(59, 232, 255, 0.8);
	}
	+ .gc-tab-item {
		margin-left: 8px;
	}
}
</style>
