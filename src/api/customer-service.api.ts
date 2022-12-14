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
					value: 20,
					label: '居民（灶具)',
					ratio: 20,
				},
				{
					value: 30,
					label: '居民（灶热)',
					ratio: 30,
				},
				{
					value: 50,
					label: '居民（采暖)',
					ratio: 50,
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

// 开户点火渠道分析
// todo
export const leftFourApi = (type): Promise<any> => {
	console.log(type)
	return new Promise(resolve => {
		resolve({
			list: [
				{
					value: 10,
					label: '线上网厅',
					ratio: 10,
				},
				{
					value: 20,
					label: '乡镇六合一',
					ratio: 20,
				},
				{
					value: 20,
					label: '线下营业厅',
					ratio: 20,
				},
				{
					value: 50,
					label: '浙里办',
					ratio: 50,
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
					value: 10,
					label: '政府机关',
					ratio: 10,
				},
				{
					value: 20,
					label: '社会团体',
					ratio: 20,
				},
				{
					value: 10,
					label: '体育',
					ratio: 10,
				},
				{
					value: 10,
					label: '学校',
					ratio: 10,
				},
				{
					value: 10,
					label: '宾馆',
					ratio: 10,
				},
				{
					value: 20,
					label: '写字楼',
					ratio: 20,
				},
				{
					value: 20,
					label: '政府机关',
					ratio: 20,
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

// 线上业务类型占比
// todo
export const rightTwoApi = (type): Promise<any> => {
	console.log(type)
	return new Promise(resolve => {
		resolve({
			list: [
				{
					value: 10,
					label: '短信查询',
					ratio: 10,
				},
				{
					value: 20,
					label: '自助抄表',
					ratio: 20,
				},
				{
					value: 20,
					label: '账单查询',
					ratio: 20,
				},
				{
					value: 50,
					label: '生活缴费',
					ratio: 50,
				},
			],
		})
	})
}

// 回访分析
// todo
export const rightThreeApi = (type): Promise<any> => {
	console.log(type)
	return new Promise(resolve => {
		resolve({
			list: [
				{
					yValue1: Math.ceil(Math.random() * 100) + 50,
					yValue2: Math.ceil(Math.random() * 50),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '01月',
				},
				{
					yValue1: Math.ceil(Math.random() * 100) + 50,
					yValue2: Math.ceil(Math.random() * 50),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '02月',
				},
				{
					yValue1: Math.ceil(Math.random() * 100) + 50,
					yValue2: Math.ceil(Math.random() * 50),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '03月',
				},
				{
					yValue1: Math.ceil(Math.random() * 100) + 50,
					yValue2: Math.ceil(Math.random() * 50),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '04月',
				},
				{
					yValue1: Math.ceil(Math.random() * 100) + 50,
					yValue2: Math.ceil(Math.random() * 50),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '05月',
				},
				{
					yValue1: Math.ceil(Math.random() * 100) + 50,
					yValue2: Math.ceil(Math.random() * 50),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '06月',
				},
			],
		})
	})
}

// 工单类型
// todo
export const rightFourApi = (type): Promise<any> => {
	console.log(type)
	return new Promise(resolve => {
		resolve({
			complete: Math.ceil(Math.random() * 20),
			inComplete: Math.ceil(Math.random() * 20),
			overtime: Math.ceil(Math.random() * 20),
			ratio: Math.ceil(Math.random() * 100),
			total: Math.ceil(Math.random() * 20),
		})
	})
}

// 工单类型
// todo
export const rightFiveApi = (type): Promise<any> => {
	console.log(type)
	return new Promise(resolve => {
		resolve({
			list: [
				{
					value: 10,
					label: '政府机关',
					ratio: 10,
				},
				{
					value: 20,
					label: '社会团体',
					ratio: 20,
				},
				{
					value: 10,
					label: '体育',
					ratio: 10,
				},
				{
					value: 10,
					label: '学校',
					ratio: 10,
				},
				{
					value: 20,
					label: '宾馆',
					ratio: 20,
				},
				{
					value: 10,
					label: '写字楼',
					ratio: 10,
				},
				{
					value: 20,
					label: '政府机关',
					ratio: 20,
				},
			],
		})
	})
}
