import { createRouter, createWebHistory, RouteRecordRaw, Router } from 'vue-router'

const routes: Array<RouteRecordRaw> = []
const context = require.context('./pages', true, /\.(route.ts)$/)
const contextTests = require.context('../tests/pages', true, /\.(route.ts)$/)

context.keys().forEach(name => {
	routes.push(context(name).default)
})

if (process.env.NODE_ENV !== 'production') {
	contextTests.keys().forEach(name => {
		routes.push(contextTests(name).default)
	})
}

const router: Router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
