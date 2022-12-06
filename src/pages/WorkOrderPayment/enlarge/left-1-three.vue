<template lang="pug">
.fn-flex.flex-column
	gc-date1(style="margin-left: auto", @init="init", @change="init")
	gc-table(:stripe="false", :columns="columns", v-model="list", :rowspan="rowspan", body-height="430px")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
	name: 'EnlargeLeft1Three',
	setup() {
		const state = reactive({
			columns: [
				{ label: '日期', key: 'value1', width: 108 },
				{ label: '智能表厂商', key: 'value2', width: 176 },
				{ label: '表具数量', key: 'value3', width: 108 },
				{ label: '上线数量', key: 'value4', width: 108 },
				{ label: '上线率', key: 'value5', width: 108 },
				{ label: '总上线率', key: 'value6', width: 108 },
			],
			list: [
				{ value1: '11-01', value2: '金卡', value3: 313134, value4: 313134, value5: '80%', value6: '80%' },
				{ value1: '11-01', value2: '真兰', value3: 313134, value4: 313134, value5: '80%', value6: '80%' },
				{ value1: '11-02', value2: '金卡', value3: 313134, value4: 313134, value5: '80%', value6: '80%' },
				{ value1: '11-02', value2: '真兰', value3: 313134, value4: 313134, value5: '80%', value6: '80%' },
				{ value1: '11-03', value2: '金卡', value3: 313134, value4: 313134, value5: '80%', value6: '80%' },
				{ value1: '11-03', value2: '真兰', value3: 313134, value4: 313134, value5: '80%', value6: '80%' },
				{ value1: '11-04', value2: '金卡', value3: 313134, value4: 313134, value5: '80%', value6: '80%' },
				{ value1: '11-04', value2: '真兰', value3: 313134, value4: 313134, value5: '80%', value6: '80%' },
				{ value1: '11-05', value2: '金卡', value3: 313134, value4: 313134, value5: '80%', value6: '80%' },
				{ value1: '11-05', value2: '真兰', value3: 313134, value4: 313134, value5: '80%', value6: '80%' },
				{ value1: '11-06', value2: '金卡', value3: 313134, value4: 313134, value5: '80%', value6: '80%' },
				{ value1: '11-06', value2: '真兰', value3: 313134, value4: 313134, value5: '80%', value6: '80%' },
				{ value1: '11-07', value2: '金卡', value3: 313134, value4: 313134, value5: '80%', value6: '80%' },
				{ value1: '11-07', value2: '真兰', value3: 313134, value4: 313134, value5: '80%', value6: '80%' },
				{ value1: '11-08', value2: '金卡', value3: 313134, value4: 313134, value5: '80%', value6: '80%' },
				{ value1: '11-08', value2: '真兰', value3: 313134, value4: 313134, value5: '80%', value6: '80%' },
			],
		})
		const init = () => {}
		const rowspan = (rowIndex, columnIndex) => {
			if (columnIndex === 0 || columnIndex === 5) {
				if (rowIndex % 2 === 0) {
					return 2
				} else {
					return 0
				}
			}
			return 1
		}
		return {
			...toRefs(state),
			init,
			rowspan,
		}
	},
})
</script>
