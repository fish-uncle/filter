<template>
	<div class="j-empty">
		<img src="../../imgs/jiance/empty.webp" alt="暂无数据" :style="`margin: ${marginTop}px auto 0;`" />
		<div class="text">暂无数据</div>
	</div>
</template>

<script>
export default {
	name: 'JEmpty',
	props: {
		marginTop: {
			type: Number,
			default: 338,
		},
	},
}
</script>
<style lang="scss" scoped>
.j-empty {
	img {
		display: block;

		width: 376px;
		height: 204px;
		object-fit: contain;
	}
	.text {
		margin-top: 41px;
		font-weight: 400px;
		font-size: 22px;
		line-height: 24px;
		color: rgba(255, 255, 255, 0.75);
		text-align: center;
	}
}
</style>
