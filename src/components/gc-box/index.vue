<template lang="pug">
.gc-box.fn-flex(:class="`gc-box-${size}`")
	.gc-box-content.gc-box-child(v-if="$slots.default")
		slot
	.gc-box-left.gc-box-child(v-if="$slots.left")
		slot(name="left")
	.gc-box-right.gc-box-child(v-if="$slots.right")
		slot(name="right")
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

type SizeProps = 'normal' | 'mini' | 'small' | 'mini-block' | 'small-block'

export default defineComponent({
	name: 'GcBox',
	props: {
		size: {
			type: String as PropType<SizeProps>,
			default: 'normal',
		},
	},
})
</script>
<style lang="scss" scoped>
.gc-box-child {
	background: rgba(0, 57, 109, 0.3);
	backdrop-filter: blur(10px);
	height: 300px;
	padding: 14px;
}
.gc-box {
	width: 100%;
	align-items: center;
	+ .gc-box {
		margin-top: 4px;
	}
}
.gc-box-content {
	width: 100%;
}
.gc-box-normal {
	.gc-box-left,
	.gc-box-right {
		width: 560px;
	}
}
.gc-box-small {
	.gc-box-left {
		width: 560px;
	}
	.gc-box-right {
		width: 450px;
	}
}
.gc-box-mini {
	.gc-box-left {
		width: 560px;
	}
	.gc-box-right {
		width: 406px;
	}
}
.gc-box-small-block {
	width: 1010px;
}
.gc-box-mini-block {
	width: 966px;
}
.gc-box-normal-block {
	width: 1120px;
}
</style>
