<template lang="pug">
.home-bg.pos-a
	.home-bg-top-shadow.pos-a
	.home-bg-bottom-shadow.pos-a
	.home-bg-left-shadow.pos-a
	.home-bg-right-shadow.pos-a
	.home-bg-top.pos-a
	.home-bg-logo.pos-a.font-title.text-center 嘉善数字燃气平台
	.home-bg-bottom.pos-a
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'HomeBg',
})
</script>
<style lang="scss" scoped>
.home-bg {
	width: 4267px;
	height: 1080px;
	top: 0;
	left: 0;
	pointer-events: none;
}
.home-bg-logo {
	font-weight: 400;
	font-size: 68px;
	line-height: 88px;
	color: #ffffff;
	width: 100%;
	height: 88px;
	top: 0;
	left: 0;
	text-shadow: 0px 0px 10px #00DDFF;
}
.home-bg-bottom {
	background-image: url('../../imgs/bg/bottom.png');
	background-size: 4010px 28px;
	background-repeat: no-repeat;
	background-position: center;
	width: 100%;
	height: 28px;
	bottom: 23px;
	left: 0;
}
.home-bg-top {
	background-image: url('../../imgs/bg/top.png');
	background-size: 4042px 83px;
	background-repeat: no-repeat;
	background-position: center;
	width: 100%;
	height: 83px;
	top: 18px;
	left: 0;
}
.home-bg-top-shadow {
	width: 100%;
	height: 157px;
	left: 0;
	top: 0;
	background: linear-gradient(180deg, #000812 19.75%, rgba(0, 43, 94, 0) 89.49%);
}
.home-bg-bottom-shadow {
	width: 100%;
	height: 156px;
	left: 0;
	bottom: 0;
	background: linear-gradient(0, #000812 12.18%, rgba(0, 43, 94, 0) 100%);
}
.home-bg-left-shadow {
	width: 1227px;
	height: 100%;
	left: 0;
	top: 0;
	background: linear-gradient(270deg, rgba(0, 43, 94, 0) 2.26%, rgba(0, 31, 68, 0.8) 24.45%, #000812 100%);
}
.home-bg-right-shadow {
	width: 1227px;
	height: 100%;
	right: 0;
	top: 0;
	background: linear-gradient(90deg, rgba(0, 43, 94, 0) 2.26%, rgba(0, 31, 68, 0.8) 24.45%, #000812 100%);
}
</style>
