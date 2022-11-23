import { hexToRgba } from '@/utils'

export default (data, props) => {
	const xData = data ? data.map(item => item.xValue) : []
	const seriesData1 = data ? data.map(item => item.yValue1) : []
	const seriesData2 = data ? data.map(item => item.yValue2) : []
	const color1 = props.color[0]
	const color2 = props.color[1]
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
					show: true,
					color: '#fff',
				},
				axisLine: {
					show: false,
				},
			},
		],
		series: [
			{
				type: 'bar',
				label: {
					show: true,
					position: 'top',
					formatter: '{a}',
					backgroundColor: color1,
					fontSize: 1,
					width: 10,
					distance: 2,
					height: 4,
					rich: {
						a: {
							color: '#fff',
						},
					},
				},
				itemStyle: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 0,
								color: color1,
							},
							{
								offset: 1,
								color: hexToRgba(color1, 0),
							},
						],
					},
				},
				barWidth: 10,
				data: seriesData1,
			},
			{
				type: 'bar',
				label: {
					show: true,
					position: 'top',
					formatter: '{a}',
					backgroundColor: color2,
					fontSize: 1,
					width: 10,
					distance: 2,
					height: 4,
					rich: {
						a: {
							color: '#fff',
						},
					},
				},
				itemStyle: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 0,
								color: color2,
							},
							{
								offset: 1,
								color: hexToRgba(color2, 0),
							},
						],
					},
				},
				barWidth: 10,
				data: seriesData2,
			},
		],
	}
	data.forEach(item => {
		max = Math.max(...[item.yValue1, item.yValue2, max])
	})
	if (max !== undefined) option.grid.left += (Math.ceil(max).toString().length - 3) * 12
	option.grid.left += props.left
	option.grid.right += props.right
	return option
}
