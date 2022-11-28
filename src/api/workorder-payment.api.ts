// 表类型趋势
// todo
export const left1TwoApi = (type): Promise<any> => {
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

// 表具使用年限分析
// todo
export const left1FiveApi = (type): Promise<any> => {
	console.log(type)
	return new Promise(resolve => {
		resolve({
			list: [
				{
					value: Math.ceil(Math.random() * 20),
					label: '8年以内',
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					value: Math.ceil(Math.random() * 20),
					label: '8-10年',
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					value: Math.ceil(Math.random() * 20),
					label: '10年以上',
					ratio: Math.ceil(Math.random() * 100),
				},
			],
		})
	})
}

// 年度装表换表拆表
// todo
export const left1SixApi = (): Promise<any> => {
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

// 缴费方式
// todo
export const rightFourApi = (type): Promise<any> => {
	console.log(type)
	return new Promise(resolve => {
		resolve({
			list: [
				{
					value: Math.ceil(Math.random() * 20),
					label: '网银',
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					value: Math.ceil(Math.random() * 20),
					label: '支付宝',
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					value: Math.ceil(Math.random() * 20),
					label: '微信',
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					value: Math.ceil(Math.random() * 20),
					label: '柜台',
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					value: Math.ceil(Math.random() * 20),
					label: '网银',
					ratio: Math.ceil(Math.random() * 100),
				},
			],
		})
	})
}

// 大用户分析TOP10
// todo
export const rightFiveApi = (): Promise<any> => {
	return new Promise(resolve => {
		resolve({
			list: [
				{
					company: '东元康复医药有限公司',
					type1: 'down',
					type2: 'down',
					value1: Math.ceil(Math.random() * 20),
					value2: Math.ceil(Math.random() * 20),
					ratio1: Math.ceil(Math.random() * 100),
					ratio2: Math.ceil(Math.random() * 100),
				},
				{
					company: '东元康复医药有限公司',
					type1: 'down',
					type2: 'down',
					value1: Math.ceil(Math.random() * 20),
					value2: Math.ceil(Math.random() * 20),
					ratio1: Math.ceil(Math.random() * 100),
					ratio2: Math.ceil(Math.random() * 100),
				},
				{
					company: '东元康复医药有限公司',
					type1: 'down',
					type2: 'down',
					value1: Math.ceil(Math.random() * 20),
					value2: Math.ceil(Math.random() * 20),
					ratio1: Math.ceil(Math.random() * 100),
					ratio2: Math.ceil(Math.random() * 100),
				},
				{
					company: '东元康复医药有限公司',
					type1: 'down',
					type2: 'down',
					value1: Math.ceil(Math.random() * 20),
					value2: Math.ceil(Math.random() * 20),
					ratio1: Math.ceil(Math.random() * 100),
					ratio2: Math.ceil(Math.random() * 100),
				},
				{
					company: '东元康复医药有限公司',
					type1: 'down',
					type2: 'down',
					value1: Math.ceil(Math.random() * 20),
					value2: Math.ceil(Math.random() * 20),
					ratio1: Math.ceil(Math.random() * 100),
					ratio2: Math.ceil(Math.random() * 100),
				},
				{
					company: '东元康复医药有限公司',
					type1: 'down',
					type2: 'down',
					value1: Math.ceil(Math.random() * 20),
					value2: Math.ceil(Math.random() * 20),
					ratio1: Math.ceil(Math.random() * 100),
					ratio2: Math.ceil(Math.random() * 100),
				},
			],
		})
	})
}

// 气量异常用户
// todo
export const rightSixApi = (type): Promise<any> => {
	console.log(type)
	return new Promise(resolve => {
		resolve({
			list: [
				{
					id: '399011804',
					address: '格林酒店',
					type: 'down',
					value: Math.ceil(Math.random() * 20),
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					id: '399011804',
					address: '格林酒店',
					type: 'down',
					value: Math.ceil(Math.random() * 20),
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					id: '399011804',
					address: '格林酒店',
					type: 'down',
					value: Math.ceil(Math.random() * 20),
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					id: '399011804',
					address: '格林酒店',
					type: 'down',
					value: Math.ceil(Math.random() * 20),
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					id: '399011804',
					address: '格林酒店',
					type: 'down',
					value: Math.ceil(Math.random() * 20),
					ratio: Math.ceil(Math.random() * 100),
				},
			],
		})
	})
}
