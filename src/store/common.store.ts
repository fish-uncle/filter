import { defineStore } from 'pinia'
/**
 *
 */
export default defineStore('Common', {
	state: () => {
		return {
			currentNav: '客户/服务',
			navList: [
				{ label: '首页', active: '首页' },
				{
					label: '客户服务',
					active: '客户/服务,工单/缴费',
					children: [{ label: '客户/服务' }, { label: '工单/缴费' }],
				},
				{ label: '生产运行', active: '生产运行' },
				{ label: '工程', active: '工程' },
			],
		}
	},
	getters: {
		isHomePage() {
			return this.currentNav === '首页'
		},
		isCustomerServicePage() {
			return this.currentNav === '客户/服务' || this.currentNav === '工单/缴费'
		},
		isWorkOrderPayment(){
			return this.currentNav === '工单/缴费'
		},
		isCustomerService() {
			return this.currentNav === '客户/服务'
		},
		isProductionOperationPage() {
			return this.currentNav === '生产运行'
		},
		isEngineeringPage() {
			return this.currentNav === '工程'
		},
	},
	actions: {
		changeNav(currentNav: string): void {
			this.currentNav = currentNav
		},
	},
})
