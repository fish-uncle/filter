export default (data, color) => {
	const option = {
		color: [color, 'rgba(200, 201, 215, 0.3)'],
		legend: {
			show: false,
		},
		tooltip: {
			triggerOn: 'mousemove|click',
		},
		series: [
			{
				type: 'pie',
				radius: ['48%', '80%'],
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
					color: 'rgba(99,180,255, 0.3)',
				},
			},
			{
				type: 'pie',
				radius: ['54%', '74%'],
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
