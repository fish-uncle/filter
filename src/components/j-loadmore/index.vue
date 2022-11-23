<template>
	<div v-load-more="handleLoadMore" class="j-load-more">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'JLoadMore',
	props: {
		hasMore: {
			type: Boolean,
			default: true,
		},
	},
	emits: ['loadmore'],
	setup(props, { emit }) {
		const handleLoadMore = () => {
			props.hasMore && emit('loadmore')
		}
		return {
			handleLoadMore,
		}
	},
}
</script>
