export default (data, color) => {
	const option = {
		color: [color, 'rgba(200, 201, 215, 0)'],
		legend: {
			show: false,
		},
		tooltip: {
			triggerOn: 'mousemove|click',
		},
		series: [
			{
				type: 'pie',
				radius: ['70%', '80%'],
				avoidLabelOverlap: false,
				label: {
					show: false,
				},
				emphasis: {
					disabled: true,
				},
				labelLine: {
					show: false,
				},
				data: [{ value: 1 }],
				itemStyle: {
					color: '#63B4FF',
				},
				colorBy: 'series',
			},
			{
				type: 'pie',
				radius: ['50%', '70%'],
				avoidLabelOverlap: false,
				label: {
					show: false,
				},
				emphasis: {
					disabled: true,
				},
				labelLine: {
					show: false,
				},
				data: [{ value: 20 }],
				itemStyle: {
					color: '#97B2FB',
				},
			},
			{
				type: 'pie',
				radius: ['50%', '80%'],
				avoidLabelOverlap: false,
				label: {
					show: false,
					position: 'center',
				},
				emphasis: {
					label: {
						show: true,
						fontSize: '28',
						fontWeight: 'bold',
					},
				},
				labelLine: {
					show: true,
				},
				data: [{ value: data }, { value: 100 - data }],
			},
		],
	}
	return option
}
