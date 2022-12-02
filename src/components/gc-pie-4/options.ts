export default (data, props) => {
	const value: any[] = []
	data.map((item, index) => {
		value.push({
			value: item.value,
			itemStyle: {
				normal: {
					color: props.color[index],
				},
			},
		})
		value.push({
			value: 0.001,
			itemStyle: {
				normal: {
					color: 'rgba(0,0,0,0)',
				},
			},
		})
	})
	return {
		series: [
			{
				minAngle: 6,
				type: 'pie',
				radius: ['80%', '85%'],
				center: ['50%', '50%'],
				labelLine: {
					normal: {
						show: false,
					},
				},
				data: value,
			},
		],
	}
}
