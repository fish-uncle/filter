// 表数量分析
// todo
export const left1OneApi = (type): Promise<any> => {
	console.log(type)
	return new Promise(resolve => {
		resolve({
			list: [
				{
					value: Math.ceil(Math.random() * 20),
					label: '普表',
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					value: Math.ceil(Math.random() * 20),
					label: 'IC卡表',
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					value: Math.ceil(Math.random() * 20),
					label: '智能表',
					ratio: Math.ceil(Math.random() * 100),
				},
			],
		})
	})
}

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

// 智能表近7日上线率
// todo
export const left1ThreeApi = (): Promise<any> => {
	return new Promise(resolve => {
		resolve({
			total: Math.ceil(Math.random() * 200000),
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

// 异常报警
// todo
export const left1FourApi = (): Promise<any> => {
	return new Promise(resolve => {
		resolve({
			list: [
				{
					time: '2022.11.18',
					name: '嘉善商学院',
					address: '环城南路60..',
					warnType: '电压异常',
				},
				{
					time: '2022.11.18',
					name: '嘉善商学院',
					address: '环城南路60..',
					warnType: '电压异常',
				},
				{
					time: '2022.11.18',
					name: '嘉善商学院',
					address: '环城南路60..',
					warnType: '电压异常',
				},
				{
					time: '2022.11.18',
					name: '嘉善商学院',
					address: '环城南路60..',
					warnType: '电压异常',
				},
				{
					time: '2022.11.18',
					name: '嘉善商学院',
					address: '环城南路60..',
					warnType: '电压异常',
				},
				{
					time: '2022.11.18',
					name: '嘉善商学院',
					address: '环城南路60..',
					warnType: '电压异常',
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

// 安检覆盖率分析
// todo
export const left2TwoApi = (type): Promise<any> => {
	console.log(type)
	return new Promise(resolve => {
		resolve({
			list: [
				{
					yValue1: Math.ceil(Math.random() * 20),
					xValue: '2021.01',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					xValue: '2021.02',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					xValue: '2021.03',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					xValue: '2021.04',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					xValue: '2021.05',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					xValue: '2021.06',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					xValue: '2021.07',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					xValue: '2021.08',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					xValue: '2021.09',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					xValue: '2021.10',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					xValue: '2021.11',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					xValue: '2021.12',
				},
			],
		})
	})
}

// 隐患类型分布
// todo
export const left2FourApi = (): Promise<any> => {
	return new Promise(resolve => {
		resolve({
			list: [
				{
					value: Math.ceil(Math.random() * 20),
					label: '软管上接三通',
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					value: Math.ceil(Math.random() * 20),
					label: '软管上接三通',
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					value: Math.ceil(Math.random() * 20),
					label: '软管上接三通',
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					value: Math.ceil(Math.random() * 20),
					label: '软管上接三通',
					ratio: Math.ceil(Math.random() * 100),
				},
				{
					value: Math.ceil(Math.random() * 20),
					label: '软管上接三通',
					ratio: Math.ceil(Math.random() * 100),
				},
			],
		})
	})
}

// 近12月安检入户率
// todo
export const left2FiveApi = (): Promise<any> => {
	return new Promise(resolve => {
		resolve({
			list: [
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '01月',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '02月',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '03月',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '04月',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '05月',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '06月',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '07月',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '08月',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '09月',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '10月',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '11月',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '12月',
				},
			],
		})
	})
}

// 抄表率分析
// todo
export const rightTwoApi = (): Promise<any> => {
	return new Promise(resolve => {
		resolve({
			list: [
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '01月',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '02月',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '03月',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '04月',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '05月',
				},
			],
		})
	})
}

// 气费回收率
// todo
export const rightThreeApi = (type): Promise<any> => {
	console.log(type)
	return new Promise(resolve => {
		resolve({
			list: [
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '01月',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '02月',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '03月',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '04月',
				},
				{
					yValue1: Math.ceil(Math.random() * 20),
					yValue2: Math.ceil(Math.random() * 20),
					yValue3: Math.ceil(Math.random() * 100),
					xValue: '05月',
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
