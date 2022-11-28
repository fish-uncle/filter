<template lang="pug">
.home-nav.pos-a.fn-flex(v-click-outside="hideMenu")
	.home-nav-item.fn-flex(
		v-for="(item, index) in navList",
		:class="{ active: item.active.indexOf(currentNav) !== -1 }",
		:key="item.label"
	)
		.home-nav-item-title.cursor-pointer.pos-r.fn-flex(@click="changeNav(item)")
			.home-nav-item-left(v-if="item.active.indexOf(currentNav) !== -1 && index !== 0", @click.stop="changePrev")
			p.fn-flex.font-title 
				i(v-if="item.children")
				span {{ item.label }}
			.home-nav-item-right(
				v-if="item.active.indexOf(currentNav) !== -1 && index !== navList.length - 1",
				@click.stop="changeNext"
			)
			template(v-if="item.children")
				.home-nav-item-child-list.pos-a(:class="{ active: showMenu[item.label] }")
					.home-nav-item-child.fn-flex(
						v-for="child in item.children",
						@click.stop="changeNav(child)",
						:class="{ active: child.label === currentNav }",
						:key="child.label"
					) {{ child.label }}
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useCommonStore } from '@/store'
import { storeToRefs } from 'pinia'
import { ClickOutside } from '@/directives'

export default defineComponent({
	name: 'HomeNav',
	directives: { ClickOutside },
	setup() {
		const commonStore = useCommonStore()
		const { navList, currentNav } = storeToRefs(commonStore)
		const state = reactive({
			showMenu: {},
		})
		const changeNav = (item): void => {
			if (item.children) {
				state.showMenu[item.label] = !state.showMenu[item.label]
			} else {
				hideMenu()
				commonStore.changeNav(item.label)
			}
		}
		const hideMenu = () => {
			state.showMenu = {}
		}
		const changePrev = (): void => {
			hideMenu()
			commonStore.changePrevNav()
		}
		const changeNext = (): void => {
			hideMenu()
			commonStore.changeNextNav()
		}
		return {
			...toRefs(state),
			navList,
			currentNav,
			changeNav,
			changePrev,
			changeNext,
			hideMenu,
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
.home-nav-item-title {
	align-items: center;
}
.home-nav-item-left {
	background-image: url('../../imgs/nav/horn.png');
	background-size: 11px 20px;
	background-repeat: no-repeat;
	background-position: center;
	width: 11px;
	height: 20px;
	transform: rotate(-180deg);
	margin-right: 10px;
}
.home-nav-item-right {
	background-image: url('../../imgs/nav/horn.png');
	background-size: 11px 20px;
	background-repeat: no-repeat;
	background-position: center;
	width: 11px;
	height: 20px;
	margin-left: 10px;
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
	i {
		background-image: url('../../imgs/nav/menu.png');
		background-size: 24px;
		background-position: center;
		background-repeat: no-repeat;
		width: 24px;
		height: 24px;
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
}
.home-nav-item-child-list {
	bottom: calc(100% + 9px);
	left: 50%;
	transform: translateX(-50%) translateY(100%);
	opacity: 0;
	background: transparent;
	transition: all 0.3s;
	pointer-events: none;
	&.active {
		transform: translateX(-50%) translateY(0);
		opacity: 1;
		pointer-events: auto;
	}
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
