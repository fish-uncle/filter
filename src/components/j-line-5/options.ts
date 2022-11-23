export default (data, props) => {
	const xData = data ? data.map(item => item.xValue) : []
	const seriesData1 = data ? data.map(item => item.yValue1) : []
	const color1 = props.color[0]
	let max = 0
	const option = {
		grid: {
			left: 65,
			right: 30,
			top: 45,
			bottom: 28,
		},
		tooltip: {
			triggerOn: 'mousemove|click',
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
					fontSize: 16,
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
						type: 'solid',
						color: 'rgba(255, 255, 255, 0.2)',
					},
				},
				axisTick: {
					show: false,
					textStyle: {
						color: 'rgba(255, 255, 255, 0.75)',
					},
				},
				axisLabel: {
					color: 'rgba(255, 255, 255, 0.75)',
					fontSize: 16,
					lineHeight: 16,
				},
				axisLine: {
					show: false,
				},
			},
			{
				nameTextStyle: {
					color: '#fff',
					fontSize: 16,
					align: 'left',
					padding: [2, 6, 5, 8],
					lineHeight: 10,
				},
				type: 'value',
				splitLine: {
					show: false,
				},
				show: true,
				axisTick: {
					show: false,
					textStyle: {
						color: '#fff',
					},
				},
				axisLabel: {
					textStyle: {
						show: true,
						color: '#fff',
					},
				},
				axisLine: {
					show: false,
				},
			},
		],
		series: [
			{
				type: 'line',
				symbol: `image://${props.icon}`,
				symbolSize : 20,
				itemStyle: {
					normal: {
						color: color1,
						lineStyle: {
							width: 2,
							type: 'dashed',
						},
					},
				},
				axisLine: {
					show: false,
				},
				data: seriesData1,
			},
		],
	}
	data.forEach(item => {
		max = Math.max(...[item.yValue1, max])
	})
	if (max !== undefined) option.grid.left += (Math.ceil(max).toString().length - 3) * 12
	option.grid.left += props.left
	option.grid.right += props.right
	return option
}
