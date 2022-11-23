import { createRouter, createWebHistory, RouteRecordRaw, Router } from 'vue-router'

const routes: Array<RouteRecordRaw> = []
const context = require.context('./pages', true, /\.(route.ts)$/)

context.keys().forEach(name => {
	routes.push(context(name).default)
})

const router: Router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
