<template lang="pug">
gc-title(label="智能表近7日上线率")
	gc-enlarge(label="智能表上线率分析", :width="756", :height="588")
		enlarge-left1-three
.left-1-three.fn-flex(style="margin-top: 12px")
	.left-1-three-left.fn-flex.flex-column
		img(:src="icon")
		span 今日上线
		h2.font-num {{ total }}
		h3 (台)
	gc-line1(v-model="list", unit="%")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import { left1ThreeApi } from '@/api/workorder-payment.api'
import EnlargeLeft1Three from '../enlarge/left-1-three.vue'

const icon = require('@/imgs/workorder-payment/left-1-three/icon.png')

export default defineComponent({
	name: 'Left1Three',
	components: { EnlargeLeft1Three },
	setup() {
		const state = reactive({
			list: [],
			total: 0,
			icon,
		})
		const init = async () => {
			const res = await left1ThreeApi()
			state.list = res.list
			state.total = res.total
		}
		onMounted(() => {
			init()
		})
		return {
			...toRefs(state),
		}
	},
})
</script>
<style lang="scss" scoped>
.left-1-three-left {
	width: 122px;
	height: 227px;
	background: rgba(0, 100, 156, 0.2);
	border-radius: 2px;
	align-items: center;
	img {
		margin-top: 20px;
		margin-bottom: 38px;
		width: 60px;
		height: 60px;
	}
	span {
		font-weight: 400;
		font-size: 18px;
		line-height: 24px;
		color: rgba(255, 255, 255, 0.75);
	}
	h2 {
		font-weight: 700;
		font-size: 32px;
		line-height: 32px;
		color: #ffffff;
		margin: 8px 0;
	}
	h3 {
		font-weight: 400;
		font-size: 16px;
		line-height: 16px;
		color: rgba(255, 255, 255, 0.75);
	}
}
</style>
