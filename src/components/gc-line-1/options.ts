import { hexToRgba } from '@/utils'

const icon = require('@/imgs/gc-line-1/icon.png')

export default (data, props) => {
	const xData = data ? data.map(item => item.xValue) : []
	const seriesData1 = data ? data.map(item => item.yValue1) : []
	const color1 = props.color[0]
	let max = 0
	const option = {
		grid: {
			left: 50,
			right: 10,
			top: 32,
			bottom: 28,
		},
		tooltip: {
			trigger: 'item',
			formatter: `<i style="background-color: ${color1}"></i><span>{c}</span>`,
			position: 'top',
			className: 'gc-line-1-tooltip',
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
				type: 'line',
				symbol: `image://${icon}`,
				symbolSize: 14,
				smooth: true,
				itemStyle: {
					normal: {
						color: {
							type: 'linear',
							colorStops: [
								{ offset: 0, color: hexToRgba(color1, 0) },
								{ offset: 0.5, color: color1 },
								{ offset: 1, color: hexToRgba(color1, 0) },
							],
						},
						lineStyle: {
							width: 2,
							type: 'solid',
						},
					},
				},
				data: seriesData1,
				areaStyle: {
					color: new window.echarts.graphic.LinearGradient(
						0,
						0,
						0,
						1,
						[
							{
								offset: 0,
								color: hexToRgba(color1, 0.5),
							},
							{
								offset: 1,
								color: hexToRgba(color1, 0),
							},
						],
						false,
					),
				},
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
