export default (data, props) => {
	let value: any[] = []
	data.forEach((item, index) => {
		value.push({
			value: item.value,
			labelLine: {
				length: 20,
				length2: 100,
			},
			label: {
				show: true,
				formatter: params => {
					if (data[params.dataIndex])
						return `${data[params.dataIndex].name}${data[params.dataIndex].value}${
							data[params.dataIndex].ratio
						}%${props.unit}`
				},
			},
			itemStyle: {
				normal: {
					color: props.color[index],
				},
			},
		})
		value.push({
			value: 0.001,
			labelLine: {
				normal: {
					show: false,
				},
			},
			itemStyle: {
				normal: {
					color: 'rgba(0,0,0,0)',
				},
			},
		})
	})
	return {
		color: props.color,
		series: [
			{
				minAngle: 6,
				data: value,
				type: 'pie',
				startAngle: 90,
				radius: ['80%', '95%'],
			},
		],
	}
}
