import Factory from '@/core/Base/factory'

/**
 * @description 小型的导航管理
 */
export default class Nav extends Factory<Nav> {
	current = '客户/服务'
	list = [
		{ label: '首页', active: '首页' },
		{
			label: '客户服务',
			active: '客户/服务,工单/缴费',
			children: [{ label: '客户/服务' }, { label: '工单/缴费' }],
		},
		{ label: '生产运行', active: '生产运行' },
		{ label: '工程', active: '工程' },
	]
	get isHomePage() {
		return this.current === '首页'
	}
	get isCustomerServicePage() {
		return this.current === '客户/服务' || this.current === '工单/缴费'
	}
	get isWorkOrderPayment() {
		return this.current === '工单/缴费'
	}
	get isCustomerService() {
		return this.current === '客户/服务'
	}
	get isProductionOperationPage() {
		return this.current === '生产运行'
	}
	get isEngineeringPage() {
		return this.current === '工程'
	}
	changeNav(current: string): void {
		this.current = current
	}
	
	changePrevNav(): void {
		let currentIndex = 0
		for (let i = 0; i < this.list.length; i++) {
			if (this.list[i].active.indexOf(this.current) !== -1) {
				currentIndex = i
			}
		}
		if (currentIndex > 0) {
			if (this.list[currentIndex - 1].children) {
				// @ts-ignore
				this.current = this.list[currentIndex - 1].children[0].label
			} else {
				this.current = this.list[currentIndex - 1].label
			}
		}
	}
	
	changeNextNav(): void {
		let currentIndex = 0
		for (let i = 0; i < this.list.length; i++) {
			if (this.list[i].active.indexOf(this.current) !== -1) {
				currentIndex = i
			}
		}
		if (currentIndex < this.list.length - 1) {
			if (this.list[currentIndex + 1].children) {
				// @ts-ignore
				this.current = this.list[currentIndex + 1].children[0].label
			} else {
				this.current = this.list[currentIndex + 1].label
			}
		}
	}
}
