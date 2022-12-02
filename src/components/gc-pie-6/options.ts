export default (data, props) => {
	const color1 = props.color[0]
	const color2 = props.color[1]
	const color3 = props.color[2]
	const value = data >= 100 ? 100 : data
	let data1: any[] = []
	let data2: any[] = []
	let num = 24
	let ratioHave = Math.floor((value * num) / 100)
	let ratioNotHave = num - ratioHave
	data2 = [
		{
			value: ratioHave,
			itemStyle: {
				color: color3,
			},
		},
		{
			value: ratioNotHave,
			itemStyle: {
				color: 'rgba(0, 0, 0, 0)',
			},
		},
	]
	console.log(ratioHave, ratioNotHave)
	while (ratioHave > 0) {
		data1 = [
			...data1,
			{
				value: 3.5,
				itemStyle: {
					color: color2,
				},
			},
			{
				value: 0.5,
				itemStyle: {
					color: 'rgba(0, 0, 0, 0)',
				},
			},
		]
		ratioHave--
	}
	while (ratioNotHave > 0) {
		data1 = [
			...data1,
			{
				value: 3.5,
				itemStyle: {
					color: color1,
				},
			},
			{
				value: 0.5,
				itemStyle: {
					color: 'rgba(0, 0, 0, 0)',
				},
			},
		]

		ratioNotHave--
	}
	return {
		series: [
			{
				data: data1,
				type: 'pie',
				startAngle: 90,
				radius: ['80%', '95%'],
				labelLine: {
					normal: {
						show: false,
					},
				},
			},
			{
				itemStyle: {
					borderRadius: 100,
				},
				data: data2,
				type: 'pie',
				startAngle: 90,
				radius: ['70%', '75%'],
				labelLine: {
					normal: {
						show: false,
					},
				},
			},
		],
	}
}
