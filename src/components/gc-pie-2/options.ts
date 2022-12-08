import { hexToRgba } from '@/utils'

export default (data, color) => {
	const value = data >= 100 ? 100 : data
	return {
		series: [
			{
				minAngle: 6,
				type: 'pie',
				radius: ['55%', '62%'],
				center: ['50%', '50%'],
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
								color: 'rgba(0, 0, 0, 0)',
							},
						},
					},
				],
			},
			{
				minAngle: 6,
				type: 'pie',
				radius: ['0', '62%'],
				center: ['50%', '50%'],
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
								color: {
									type: 'linear',
									colorStops: [
										{ offset: 0, color: hexToRgba(color, 0.1) },
										{ offset: 1, color: hexToRgba(color, 0.4) },
									],
								},
							},
						},
					},
					{
						value: 100 - value,
						itemStyle: {
							normal: {
								color: 'rgba(0, 0, 0, 0)',
							},
						},
					},
				],
			},
		],
	}
}
