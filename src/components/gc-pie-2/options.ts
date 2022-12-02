export default (data, props) => {
	const color1 = props.color[0]
	const value: any[] = []
	data.map(item => {
		value.push({
			value: item.value,
			itemStyle: {
				normal: {
					color: 'rgba(99, 180, 255, 0.18)',
				},
				emphasis: {
					color: color1,
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
				radius: ['70%', '85%'],
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
