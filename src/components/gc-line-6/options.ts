export default (data, props) => {
	const xData = data ? data.map(item => item.xValue) : []
	const seriesData1 = data ? data.map(item => item.yValue1) : []
	const seriesData2 = data ? data.map(item => item.yValue2) : []
	const seriesData3 = data ? data.map(item => item.yValue3) : []
	const color1 = props.color[0]
	const color2 = props.color[1]
	const color3 = props.color[2]
	const legend = props.legend.map((item,index) => {
		if (index == 2) {
			return {
				icon: 'triangle',
				itemStyle: {
				},
				name: item.toString(),
			}
		}
		return {
			icon: 'rect',
			name: item.toString(),
		}
	})
	let max = 0
	const option = {
		grid: {
			left: 50,
			right: 10,
			top: 32,
			bottom: 28,
		},
		legend: {
			itemWidth: 16,
			itemHeight: 2,
			itemGap: 16,
			data: legend,
			textStyle: {
				fontSize: 14,
				lineHeight: 16,
				color: '#FFFFFF',
			},
		},
		tooltip: {
			position: 'top',
			trigger: 'item',
			className: 'gc-line-5-tooltip',
			formatter: params => {
				return `<p class="fn-flex"><i style="background-color: ${color1}"></i><span style="color: ${color1}">${
					seriesData1[params.dataIndex]
				}</span></p>
				<p class="fn-flex"><i style="background-color: ${color2}"></i><span style="color: ${color2}">${
					seriesData2[params.dataIndex]
				}</span></p>
				<p class="fn-flex"><i style="background-color: ${color3}"></i><span style="color: ${color3}">${
					seriesData3[params.dataIndex]
				}</span></p>`
			},
			axisPointer: {
				lineStyle: {
					type: 'dashed',
					color: 'rgba(59, 232, 255, 0.5)',
				},
			},
		},
		xAxis: [
			{
				type: 'category',
				axisTick: {
					show: false,
				},
				axisLine: {
					show: false,
				},
				axisLabel: {
					color: 'rgba(255, 255, 255, 0.75)',
					fontSize: 14,
					lineHeight: 16,
				},
				data: xData,
			},
		],
		yAxis: [
			{
				type: 'value',
				show: true,
				splitLine: {
					lineStyle: {
						type: 'dashed',
						color: 'rgba(255, 255, 255, 0.3)',
					},
				},
				axisLabel: {
					color: 'rgba(255, 255, 255, 0.75)',
					fontSize: 14,
					lineHeight: 16,
				},
				axisLine: {
					show: false,
				},
			},
		],
		series: [
			{
				name: props.legend[2],
				type: 'bar',
				stack: 'Ad',
				barWidth: 12,
				itemStyle: {
					normal: {
						color: color3,
					},
				},
				data: seriesData3,
			},
			{
				name: props.legend[1],
				type: 'bar',
				stack: 'Ad',
				barWidth: 12,
				itemStyle: {
					normal: {
						color: color2,
					},
				},
				data: seriesData2,
			},
			{
				name: props.legend[0],
				type: 'bar',
				stack: 'Ad',
				barWidth: 12,
				itemStyle: {
					normal: {
						color: color1,
					},
				},
				data: seriesData1,
			},
		],
	}
	data.forEach(item => {
		max = Math.max(...[item.yValue1, item.yValue2, item.yValue3, max])
	})
	if (max !== undefined) option.grid.left += (Math.ceil(max).toString().length - 3) * 12
	option.grid.left += props.left
	option.grid.right += props.right
	return option
}
