export default (data, props) => {
	const color1 = props.color[0]
	const value = data >= 100 ? 100 : data
	return {
		series: [
			{
				type: 'pie',
				radius: ['65%', '75%'],
				center: ['50%', '50%'],
				labelLine: {
					normal: {
						show: false,
					},
				},
				itemStyle: {
					borderRadius: 100,
				},
				data: [
					{
						value,
						itemStyle: {
							normal: {
								shadowBlur: 7,
								shadowColor: '#3CE8FF',
								color: color1,
							},
						},
					},
					{
						value: 1,
						itemStyle: {
							normal: {
								color: 'rgba(0,0,0,0)',
							},
						},
					},
					{
						value: 100 - value,
						itemStyle: {
							normal: {
								color: '#145A81',
							},
						},
					},
					{
						value: 1,
						itemStyle: {
							normal: {
								color: 'rgba(0,0,0,0)',
							},
						},
					},
				],
			},
		],
	}
}
