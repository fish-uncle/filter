export default (data, props) => {
	const color1 = props.color[0]
	const color2 = props.color[1]
	const color3 = props.color[2]
	const color4 = props.color[3]
	const value1 = data[0] ? data[0].ratio : 0
	const value2 = data[1] ? data[1].ratio : 0
	const value3 = data[2] ? data[2].ratio : 0
	const value4 = data[3] ? data[3].ratio : 0
	const item = {
		labelLine: {
			normal: { length: 0, length2: 40, lineStyle: { type: 'dashed' } }
		},
		label: {
			formatter: '{c}%',
			fontSize: 16,
			color: 'rgba(255, 255, 255, 0.75)'
		},
	}
	return {
		series: [
			{
				type: 'pie',
				radius: ['60%', '65%'],
				center: ['50%', '45%'],
				clockwise: false,
				labelLine: {
					normal: {
						show: false,
					},
				},
				data: [
					{
						...item,
						value: value1,
						itemStyle: {
							normal: {
								borderRadius: 10,
								color: color1,
							},
						},
					},
					{
						value: 100 - value1,
						itemStyle: {
							normal: {
								color: 'rgba(141, 214, 255, 0)',
							},
						},
					},
				],
			},
			{
				type: 'pie',
				radius: ['45%', '50%'],
				center: ['50%', '45%'],
				clockwise: false,
				labelLine: {
					normal: {
						show: false,
					},
				},
				data: [
					{
						...item,
						value: value2,
						itemStyle: {
							normal: {
								borderRadius: 10,
								color: color2,
							},
						},
					},
					{
						value: 100 - value2,
						itemStyle: {
							normal: {
								color: 'rgba(141, 214, 255, 0)',
							},
						},
					},
				],
			},
			{
				type: 'pie',
				radius: ['30%', '35%'],
				center: ['50%', '45%'],
				clockwise: false,
				labelLine: {
					normal: {
						show: false,
					},
				},
				data: [
					{
						...item,
						value: value3,
						itemStyle: {
							normal: {
								borderRadius: 10,
								color: color3,
							},
						},
					},
					{
						value: 100 - value3,
						itemStyle: {
							normal: {
								color: 'rgba(141, 214, 255, 0)',
							},
						},
					},
				],
			},
			{
				type: 'pie',
				radius: ['15%', '20%'],
				center: ['50%', '45%'],
				clockwise: false,
				labelLine: {
					normal: {
						show: false,
					},
				},
				data: [
					{
						...item,
						value: value4,
						itemStyle: {
							normal: {
								borderRadius: 10,
								color: color4,
							},
						},
					},
					{
						value: 100 - value4,
						itemStyle: {
							normal: {
								color: 'rgba(141, 214, 255, 0)',
							},
						},
					},
				],
			},
		],
	}
}
