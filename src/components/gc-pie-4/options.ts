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
			value: 2,
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
