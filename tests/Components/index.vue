<template lang="pug">
.components
	h2 组件
	.fn-flex
		.components-item-list
			.components-item.cursor-pointer(
				@click="handlerClick(index)",
				v-for="(item, index) in componentList",
				:key="index",
				:class="{ active: index === currentIndex }"
			)
				span {{ item }}
		.components-right.fn-flex.flex-column
			.components-example(:class="{ dark }")
				.components-example-title 
					span.cursor-pointer(:class="{ active: dark }", @click="dark = true") 黑暗模式
					span.cursor-pointer(:class="{ active: !dark }", @click="dark = false") 明亮模式
			.components-example(:class="{ dark }")
				.components-example-title
					label 图例
				.components-example-content
					img(:src="componentPicture[currentIndex]")
			.components-example(:class="{ dark }")
				.components-example-title
					label 在线实例
				.components-example-content
					component(:is="currentComponent", v-bind="params")
			.components-example(:class="{ dark }")
				.components-example-title 
					label 数据
				textarea(v-model="currentParams")
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, computed } from 'vue'
import Components from '../../src/components'
import { connectorToUppercase } from '../../src/utils'
const JSON5 = require('json5')

const components = {}
Components.forEach(item => {
	components[item.name] = item
})
export default defineComponent({
	components: {
		...components,
	},
	setup() {
		const state = reactive({
			componentList: [],
			componentPicture: [],
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
			const context = require.context('../../src/components', true, /index.png$/)
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
.components-example-title {
	margin-bottom: 10px;
	label {
		margin-right: 10px;
	}
	span {
		border: 1px solid #000;
		padding: 2px 10px;
		color: #000;
		border-radius: 4px;
		&.active {
			border: 1px solid #000;
			background-color: #000;
			color: #fff;
		}
		+ span {
			margin-left: 10px;
		}
	}
}
.components {
	padding: 20px;
}
.components-item-list {
	border-right: 1px solid #b8b8b8;
	padding-right: 20px;
	width: 150px;
}
.components-right {
	flex: 1;
}
.components-example {
	padding: 20px;
	max-width: 1120px;
	flex: 1;
	margin-left: 20px;
	img {
		max-width: 100%;
		max-height: 100%;
	}
	&.dark {
		.components-example-content {
			background-color: #000;
			padding: 20px;
		}
	}
}
.components-item {
	padding: 10px 0;
	color: #2d2d2d;
	&.active {
		color: #000;
		font-weight: 500;
		text-decoration: underline;
	}
}
</style>
