// import Http from '@/core/Http'
// @ts-ignore
// const http: Http = Http.Instance()

// 用户组成
// todo
export const leftOneApi = (type): Promise<any> => {
	console.log(type)
	return new Promise(resolve => {
		resolve({
			total: Math.ceil(Math.random() * 200000),
			total1: Math.ceil(Math.random() * 200000),
			total2: Math.ceil(Math.random() * 200000),
			list: [
				{ yValue1: Math.ceil(Math.random() * 20), xValue: '2021.01' },
				{ yValue1: Math.ceil(Math.random() * 20), xValue: '2021.02' },
				{ yValue1: Math.ceil(Math.random() * 20), xValue: '2021.03' },
				{ yValue1: Math.ceil(Math.random() * 20), xValue: '2021.04' },
				{ yValue1: Math.ceil(Math.random() * 20), xValue: '2021.05' },
			],
		})
	})
}

// 用气性质分析
// todo
export const leftTwoApi = (type): Promise<any> => {
	console.log(type)
	return new Promise(resolve => {
		resolve({
			list: [
				{
					value: Math.ceil(Math.random() * 20),
					label: '居民（灶具)',
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					value: Math.ceil(Math.random() * 20),
					label: '居民（灶热)',
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					value: Math.ceil(Math.random() * 20),
					label: '居民（采暖)',
					ratio: Math.ceil(Math.random() * 100),
				},
			],
		})
	})
}

// 近12月客户新增
// todo
export const leftThreeApi = (type): Promise<any> => {
	console.log(type)
	return new Promise(resolve => {
		resolve({
			list: [
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '2021.01',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '2021.02',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '2021.03',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '2021.04',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '2021.05',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '2021.06',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '2021.07',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '2021.08',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '2021.09',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '2021.10',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '2021.11',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '2021.12',
				},
			],
		})
	})
}

// 年度工商户行业分布
// todo
export const leftFiveApi = (): Promise<any> => {
	return new Promise(resolve => {
		resolve({
			list: [
				{
					value: Math.ceil(Math.random() * 20),
					label: '政府机关',
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					value: Math.ceil(Math.random() * 20),
					label: '社会团体',
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					value: Math.ceil(Math.random() * 20),
					label: '体育',
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					value: Math.ceil(Math.random() * 20),
					label: '学校',
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					value: Math.ceil(Math.random() * 20),
					label: '宾馆',
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					value: Math.ceil(Math.random() * 20),
					label: '写字楼',
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					value: Math.ceil(Math.random() * 20),
					label: '政府机关',
					ratio: Math.ceil(Math.random() * 100),
				},
			],
		})
	})
}

// 工商户行业用气量同比
// todo
export const leftSixApi = (type): Promise<any> => {
	console.log(type)
	return new Promise(resolve => {
		resolve({
			list: [
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 20),
					xValue: '01',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 20),
					xValue: '02',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 20),
					xValue: '03',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 20),
					xValue: '04',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 20),
					xValue: '05',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 20),
					xValue: '06',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 20),
					xValue: '07',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 20),
					xValue: '08',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 20),
					xValue: '09',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 20),
					xValue: '10',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 20),
					xValue: '11',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 20),
					xValue: '12',
				},
			],
		})
	})
}

// 工单类型
// todo
export const rightFiveApi = (): Promise<any> => {
	return new Promise(resolve => {
		resolve({
			list: [
				{
					value: Math.ceil(Math.random() * 20),
					label: '政府机关',
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					value: Math.ceil(Math.random() * 20),
					label: '社会团体',
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					value: Math.ceil(Math.random() * 20),
					label: '体育',
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					value: Math.ceil(Math.random() * 20),
					label: '学校',
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					value: Math.ceil(Math.random() * 20),
					label: '宾馆',
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					value: Math.ceil(Math.random() * 20),
					label: '写字楼',
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					value: Math.ceil(Math.random() * 20),
					label: '政府机关',
					ratio: Math.ceil(Math.random() * 100),
				},
			],
		})
	})
}
