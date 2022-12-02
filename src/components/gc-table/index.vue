<template lang="pug">
.gc-table(:class="{ 'gc-table-border': !hideBorder }")
	.gc-table-thead-box(v-if="!hideHeader")
		table.gc-table-box(:class="{ 'gc-table-stripe': stripe }")
			thead.gc-table-thead
				tr
					td(:width="item.width", v-for="(item, index) in columns", :key="index") {{ item.label }}
	.gc-table-tbody-box(:style="{ height: bodyHeight }")
		table.gc-table-box(:class="{ 'gc-table-stripe': stripe }")
			tbody.gc-table-tbody
				tr(v-for="(item, rowIndex) in currentValue", :key="rowIndex")
					template(v-for="(child, columnIndex) in columns")
						td(
							v-if="colspan(rowIndex, columnIndex) && rowspan(rowIndex, columnIndex)",
							:colspan="colspan(rowIndex, columnIndex)",
							:rowspan="rowspan(rowIndex, columnIndex)",
							:width="child.width",
							:key="columnIndex",
							:style="child.style"
						) {{ child && item[child['key']] }}
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue'

export default defineComponent({
	name: 'gc-table',
	props: {
		modelValue: {
			type: Array,
			default() {
				return []
			},
		},
		hideHeader: {
			default: false,
			type: Boolean,
		},
		hideBorder: {
			default: false,
			type: Boolean,
		},
		columns: {
			type: Array,
			default() {
				return []
			},
		},
		bodyHeight: {
			type: String,
			default: 'auto',
		},
		rowspan: {
			type: Function,
		},
		colspan: {
			type: Function,
		},
		stripe: {
			default: false,
			type: Boolean,
		},
	},
	setup(props) {
		const state = reactive({
			currentValue: props.modelValue,
			span: [],
		})
		const rowspan = (rowIndex, columnIndex) => {
			if (typeof props.rowspan === 'function') {
				return props.rowspan(rowIndex, columnIndex)
			}
			return 1
		}
		const colspan = (rowIndex, columnIndex) => {
			if (typeof props.colspan === 'function') {
				return props.colspan(rowIndex, columnIndex)
			}
			return 1
		}
		watch(
			() => props.modelValue,
			val => {
				state.currentValue = val
			},
		)
		return {
			...toRefs(state),
			rowspan,
			colspan,
		}
	},
})
</script>
<style lang="scss" scoped>
.gc-table {
	margin-top: 20px;
	&.gc-table-border {
		.gc-table-box {
			border: 1px solid #1d6a96;
		}
		table,
		th,
		td {
			border: 0.5px solid #1d6a96;
		}
	}
}

.gc-table-box {
	width: 100%;
	border-spacing: 0;
	tr {
		font-weight: 400;
		font-size: 14px;
		height: 40px;
	}

	td {
		padding-left: 8px;
		margin: 0;
	}
	&.gc-table-stripe {
		.gc-table-tbody {
			tr {
				&:nth-child(2n) {
					background: rgba(0, 105, 164, 0.46);
				}
			}
		}
	}
}
.gc-table-thead-box {
	table {
		border-bottom: none;
	}
}
.gc-table-thead {
	background: rgba(0, 105, 164, 0.46);
	tr {
		color: #3ce8ff;
		font-weight: 400;
		font-size: 14px;
		height: 40px;
	}
}
.gc-table-tbody-box {
	overflow-y: auto;
}
.gc-table-tbody {
	tr {
		color: #ffffff;
	}
}
</style>
