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
	name: 'JTabs1',
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
	display: inline-flex;
	align-items: center;
	justify-content: space-around;
	height: 28px;
	border: 1px solid #3b9aff;
	border-radius: 2px;
	overflow: hidden;
	cursor: pointer;
	.tab-item {
		flex: 1;
		font-weight: 500;
		font-size: 16px;
		line-height: 28px;
		text-align: center;
		color: #ffffff;

		&.active {
			color: #001d5c;
			background: #3b9aff;
		}
	}
}
</style>
