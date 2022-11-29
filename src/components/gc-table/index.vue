<template lang="pug">
table.gc-table
	slot
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'gc-table',
})
</script>
<style lang="scss" scoped>
.gc-table {
	border: 1px solid #1d6a96;
	width: 100%;
	border-spacing: 0;
	margin-top: 20px;
	&::v-deep(thead) {
		background: rgba(0, 105, 164, 0.46);
		tr {
			color: #3ce8ff;
			font-weight: 400;
			font-size: 14px;
			height: 40px;
		}
	}
	&::v-deep(tr) {
		font-weight: 400;
		font-size: 14px;
		height: 40px;
	}
	&::v-deep(td) {
		padding-left: 8px;
		margin: 0;
		border-right: 1px solid #1d6a96;
		border-bottom: 1px solid #1d6a96;
		&:last-child {
			border-right: none;
		}
	}
	&::v-deep(tbody) {
		tr {
			color: #ffffff;
			&:nth-child(2n) {
				background: rgba(0, 105, 164, 0.46);
			}
			&:last-child {
				td {
					border-bottom: none;
				}
			}
		}
	}
}
</style>
