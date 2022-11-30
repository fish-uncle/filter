import { hexToRgba } from '@/utils'

const icon = require('@/imgs/gc-line-7/icon.png')

export default (data, props) => {
	const xData = data ? data.map(item => item.xValue) : []
	const seriesData1 = data ? data.map(item => item.yValue1) : []
	const seriesData2 = data ? data.map(item => item.yValue2) : []
	const seriesData3 = data ? data.map(item => item.yValue3) : []
	const color1 = props.color[0]
	const color2 = props.color[1]
	const color3 = props.color[2]
	const legend = props.legend.map((item, index) => {
		if (index == 2) {
			return {
				icon: 'rect',
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
			right: 50,
			top: 32,
			bottom: 28,
		},
		legend: {
			itemWidth: 11,
			itemHeight: 5,
			itemGap: 23,
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
			className: 'gc-line-7-tooltip',
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
			{
				type: 'value',
				show: true,
				splitLine: {
					lineStyle: {
						type: 'dashed',
						color: 'rgba(255, 255, 255, 0)',
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
				yAxisIndex: 0,
				name: props.legend[0],
				type: 'bar',
				barWidth: 8,
				itemStyle: {
					normal: {
						color: new window.echarts.graphic.LinearGradient(
							0,
							0,
							0,
							1,
							[
								{
									offset: 0,
									color: hexToRgba(color1, 1),
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
				data: seriesData1,
			},
			{
				yAxisIndex: 0,
				name: props.legend[1],
				type: 'bar',
				barWidth: 8,
				itemStyle: {
					normal: {
						color: new window.echarts.graphic.LinearGradient(
							0,
							0,
							0,
							1,
							[
								{
									offset: 0,
									color: hexToRgba(color2, 1),
								},
								{
									offset: 1,
									color: hexToRgba(color2, 0),
								},
							],
							false,
						),
					},
				},
				data: seriesData2,
			},
			{
				yAxisIndex: 1,
				name: props.legend[2],
				type: 'line',
				symbol: `image://${icon}`,
				symbolSize: 10,
				itemStyle: {
					normal: {
						color: color3,
						lineStyle: {
							width: 1,
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
