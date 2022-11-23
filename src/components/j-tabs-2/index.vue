<template>
	<div class="j-tabs" :style="`width: ${width}px`">
		<div
			v-for="tab in tabList"
			:key="tab.value"
			class="tab-item"
			:class="curTab === tab.value ? 'active' : ''"
			@click="handleTabClick(tab)"
		>
			{{ tab.label }}
		</div>
	</div>
</template>
<script lang="ts">
import { reactive, PropType, toRefs, computed } from 'vue'
export interface ITabItem {
	value: string
	label: string
	[x: string]: any
}
export default {
	name: 'JTabs2',
	props: {
		tabList: {
			type: Array as PropType<ITabItem[]>,
			default: () => {
				return []
			},
		},
		modelValue: {
			type: String,
			default: '',
		},
		width: {
			type: Number,
			default: 582,
		},
	},
	emits: ['update:modelValue', 'change'],
	setup(props, { emit }) {
		const state = reactive({})
		const curTab = computed({
			get: () => {
				return props.modelValue
			},

			set: val => {
				emit('update:modelValue', val)
			},
		})
		const handleTabClick = ({ value }) => {
			curTab.value = value
			emit('change', value)
		}
		return {
			...toRefs(state),
			handleTabClick,
			curTab,
		}
	},
}
</script>
<style lang="scss" scoped>
.j-tabs {
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: 64px;
	border-bottom: 2px solid rgba(140, 203, 255, 0.4);
	cursor: pointer;
	.tab-item {
		text-align: center;
		font-size: 24px;
		color: #aaabbd;
		height: 64px;
		line-height: 64px;
		&.active {
			font-style: normal;
			font-weight: 600;
			font-size: 24px;
			color: #ffffff;
			border-bottom: 4px solid #3b9aff;
		}
	}
}
</style>
