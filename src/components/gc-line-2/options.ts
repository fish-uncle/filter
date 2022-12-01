export default (data, props) => {
	const xData = data ? data.map(item => item.xValue) : []
	const seriesData1 = data ? data.map(item => item.yValue1) : []
	const seriesData2 = data ? data.map(item => item.yValue2) : []
	const seriesData3 = data ? data.map(item => item.yValue3) : []
	const color1 = props.color[0]
	const color2 = props.color[1]
	const color3 = props.color[2]
	const legend = props.legend.map(item => {
		return item.toString()
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
			icon: 'rect',
			itemWidth: 16,
			itemHeight: 8,
			itemGap: 16,
			data: legend,
			textStyle: {
				fontSize: 14,
				lineHeight: 16,
				color: '#FFFFFF',
			},
		},
		tooltip: {
			position: function (point) {
				return [point[0], '16%']
			},
			trigger: 'axis',
			className: 'gc-line-2-tooltip',
			formatter: `<p class="fn-flex"><i style="background-color: ${color1}"></i><span style="color: ${color1}">{c0}</span></p>
				<p class="fn-flex"><i style="background-color: ${color2}"></i><span style="color: ${color2}">{c1}</span></p>
				<p class="fn-flex"><i style="background-color: ${color3}"></i><span style="color: ${color3}">{c2}</span></p>`,
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
				splitNumber: 5,
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
				name: props.legend[0],
				type: 'line',
				symbol: 'none',
				itemStyle: {
					normal: {
						color: color1,
						lineStyle: {
							width: 2,
							type: 'dashed',
						},
					},
				},
				data: seriesData1,
			},
			{
				name: props.legend[1],
				type: 'line',
				symbol: 'none',
				itemStyle: {
					normal: {
						color: color2,
						lineStyle: {
							width: 2,
							type: 'dashed',
						},
					},
				},
				data: seriesData2,
			},
			{
				name: props.legend[2],
				type: 'line',
				symbol: 'none',
				itemStyle: {
					normal: {
						color: color3,
						lineStyle: {
							width: 2,
							type: 'dashed',
						},
					},
				},
				data: seriesData3,
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
