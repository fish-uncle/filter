// import Http from '@/core/Http'

// const http: Http = Http.Instance()

// 用户组成
// todo
export const userCompositionApi = type => {
	console.log(type)
	return new Promise(resolve => {
		resolve({
			total: 238238,
			total1: 235335,
			total2: 2903,
			list: [
				{ yValue: 14, xValue: '2021.01' },
				{ yValue: 12, xValue: '2021.02' },
				{ yValue: 13, xValue: '2021.03' },
				{ yValue: 15, xValue: '2021.04' },
				{ yValue: 15, xValue: '2021.04' },
			],
		})
	})
}
