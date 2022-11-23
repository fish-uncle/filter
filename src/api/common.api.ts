import Http from '@/core/Http'

const http: Http = Http.Instance()

// 设备全部列表

export const deviceAll = success => {
	http.request({
		url: '/admin-api/others/real-time-detection/device/list',
		success,
		method: 'POST',
		params: {
			size: 100000,
			tenantId: 1,
		},
	})
}
