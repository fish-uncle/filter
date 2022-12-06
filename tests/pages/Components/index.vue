<template lang="pug">
.components
	.components-title.fn-flex
		h2 组件
		.components-func
			button.cursor-pointer(:class="{ active: dark }", @click="dark = true") 黑暗模式
			button.cursor-pointer(:class="{ active: !dark }", @click="dark = false") 明亮模式
		.components-func
			label 最大宽度设置
			input(v-model="width")
	.components-item-list.fn-flex(:class="{ dark }")
		.components-item.cursor-pointer.fn-flex(
			@click="handlerClick(index)",
			v-for="(item, index) in componentList",
			:key="index",
			:class="{ active: index === currentIndex }"
		)
			img(:src="componentPicture[index]")
	.components-title.fn-flex
		h2 在线实例
	.components-example.fn-flex(:class="{ dark }")
		component(:is="currentComponent", v-bind="params")
	.components-title.fn-flex
		h2 props数据
	.components-example.fn-flex(:class="{ dark }")
		textarea(v-model="currentParams")
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, computed } from 'vue'
import Components from '../../../src/components'
import { connectorToUppercase } from '../../../src/utils'
const JSON5 = require('json5')

const components = {}
Components.forEach(item => {
	components[item.name] = item
})
export default defineComponent({
	name: 'Components',
	components: {
		...components,
	},
	setup() {
		const state = reactive({
			componentList: [],
			componentPicture: [],
			width: 1120,
			currentIndex: 0,
			dark: true,
			params: {},
		})

		const handlerClick = index => {
			state.currentIndex = index
		}

		const currentComponent = computed(() => {
			return components[connectorToUppercase(state.componentList[state.currentIndex])]
		})

		const currentParams = computed({
			set: val => {
				state.params = JSON5.parse(val)
			},
			get: () => {
				return JSON5.stringify(state.params)
			},
		})

		onMounted(() => {
			const context = require.context('../../../src/components', true, /index.png$/)
			context.keys().forEach(item => {
				const arr = item.split('/')
				const name = arr[1]
				state.componentList.push(name)
				state.componentPicture.push(context(item))
			})
		})

		return {
			...toRefs(state),
			currentComponent,
			handlerClick,
			currentParams,
		}
	},
})
</script>
<style lang="scss" scoped>
.components-func {
	margin-left: 10px;
}
.components-title {
	align-items: center;
	margin: 10px 0;
	h2 {
		font-size: 16px;
	}
	input {
		border: 1px solid #000;
		margin-left: 10px;
		border-radius: 4px;
		height: 26px;
		padding: 0 10px;
		font-size: 14px;
	}
	span,
	label {
		font-size: 14px;
	}
	button {
		font-size: 14px;
		border: 1px solid #000;
		padding: 0 10px;
		color: #000;
		height: 26px;
		border-radius: 4px;
		background-color: transparent;
		&.active {
			border: 1px solid #000;
			background-color: #000;
			color: #fff;
		}
		+ button {
			margin-left: 10px;
		}
	}
}
.components {
	padding: 20px;
}
.components-item-list {
	flex-wrap: wrap;
	padding: 10px;
	background-color: #e5e5e5;
	height: 500px;
	overflow-y: auto;
	&.dark {
		background-color: #000;
	}
}
.components-example {
	padding: 20px;
	max-width: 1120px;
	flex: 1;
	background-color: #e5e5e5;
	&.dark {
		background-color: #000;
	}
}
.components-item {
	padding: 10px 0;
	color: #2d2d2d;
	width: 200px;
	height: 200px;
	align-items: center;
	justify-content: center;
	img {
		max-width: 100%;
		max-height: 100%;
	}
}
</style>
