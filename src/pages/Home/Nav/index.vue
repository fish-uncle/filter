<template lang="pug">
.home-nav.pos-f.fn-flex
	.home-nav-item.fn-flex(
		v-for="item in navList",
		:class="{ active: item.active.indexOf(currentNav) !== -1 }",
		:key="item.label"
	)
		.home-nav-item-title.cursor-pointer.pos-r(@click="changeNav(item)")
			p.fn-flex.font-title {{ item.label }}
			template(v-if="item.children")
				.home-nav-item-child-list.pos-a
					.home-nav-item-child.fn-flex(
						v-for="child in item.children",
						@click.stop="changeNav(child)",
						:class="{ active: child.label === currentNav }",
						:key="child.label"
					) {{ child.label }}
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useCommonStore } from '@/store'
import { storeToRefs } from 'pinia'

export default defineComponent({
	name: 'HomeNav',
	props: {
		label: {
			type: String,
		},
	},
	setup() {
		const commonStore = useCommonStore()
		const { navList, currentNav } = storeToRefs(commonStore)
		const changeNav = (item): void => {
			if (item.children) {
				commonStore.changeNav(item.children[0].label)
			} else {
				commonStore.changeNav(item.label)
			}
		}
		return {
			navList,
			currentNav,
			changeNav,
		}
	},
})
</script>
<style lang="scss" scoped>
.home-nav {
	bottom: 63px;
	left: 50%;
	transform: translateX(-50%);
	width: 1054px;
	height: 78px;
	align-items: center;
	justify-content: center;
	background: radial-gradient(
		100.28% 24656.22% at 100.28% 44.87%,
		rgba(2, 93, 159, 0) 0%,
		#4ea1de 46.35%,
		rgba(2, 93, 159, 0) 100%
	);
}
.home-nav-item-child {
	display: none;
}
.home-nav-item {
	width: 198px;
	height: 100%;
	font-weight: 400;
	font-size: 36px;
	align-items: center;
	justify-content: center;
	color: #e0f7fd;
	margin-right: 10px;
	transition: all 0.3s;
	transform: translate3d(0, 0, 0);
	p {
		background: transparent;
		height: 60px;
		align-items: center;
		justify-content: center;
	}
	&:last-child {
		margin-right: 0;
	}
	&.active {
		width: 250px;
		p {
			transform: translate3d(0, 0, 0);
			width: 198px;
			background: rgba(101, 253, 244, 0.6);
			border-radius: 4px;
		}
	}
	&:hover {
		.home-nav-item-child {
			display: flex;
		}
	}
}
.home-nav-item-child-list {
	bottom: calc(100% + 9px);
	left: 50%;
	transform: translateX(-50%);
	background: transparent;
}
.home-nav-item-child {
	background: rgba(0, 57, 109, 0.6);
	backdrop-filter: blur(5.64655px);
	border-radius: 4px;
	width: 198px;
	height: 60px;
	align-items: center;
	justify-content: center;
	margin-bottom: 6px;
	font-weight: 600;
	font-size: 28px;
	color: rgba(255, 255, 255, 0.75);
	border: 2px solid transparent;
	&.active {
		border: 2px solid #3be8ff;
		color: #3be8ff;
	}
}
</style>
