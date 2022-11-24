export default (data, color) => {
	const value = data >= 100 ? 100 : data
	return  {
		series: [
			{
				type: 'pie',
				radius: ['65%', '75%'],
				center: ['40%', '50%'],
				labelLine: {
					normal: {
						show: false,
					},
				},
				data: [
					{
						value,
						itemStyle: {
							normal: {
								color,
							},
						},
					},
					{
						value: 100 - value,
						itemStyle: {
							normal: {
								color: 'rgba(141, 214, 255, 0.1)',
							},
						},
					},
				],
			},
			{
				type: 'pie',
				radius: ['55%', '80%'],
				center: ['40%', '50%'],
				labelLine: {
					normal: {
						show: false,
					},
				},
				data: [
					{
						value: 100,
						itemStyle: {
							normal: {
								color: 'rgba(99, 180, 255, 0.15)',
							},
						},
					},
				],
			},
		],
	}
}
