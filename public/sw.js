// const CACHE_NAME = 'jz-screen-V1.0.0'
const MAP_BOX_CACHE = 'mapbox-imagery-cache'
const TIAN_MAP_CACHE = 'tianditu-imagery-cache'
const CESIUM_SDK_CACHE = 'cesium-sdk-cache'
const CESIUM_ONLINE_CACHE = 'cesium-online-cache'
const MODEL_CACHE = 'model-cache'
const TILES_CACHE = '3dtiles-cache'

const TIAN_MAP_URL = 'tianditu.gov.cn'
const CESIUM_URL = 'Cesium/'
const TILES_URL = '3dtiles'
const MAP_BOX_HOSTNAME = [
	'api.mapbox.com'
]
const CESIUM_ONLINE_HOSTNAME=[
	'assets.cesium.com'
]

self.addEventListener('install', () => {
	console.log('[Service Worker] Caching all: app shell and content')
})

// self.addEventListener('fetch', (e) => {
// 	// mapbox
// 	if(e.request.url.indexOf(TIAN_MAP_URL) > -1){
// 		e.respondWith((async () => {
// 			const r = await caches.match(e.request)
// 			if (r){
// 				return r
// 			}else{
// 				const response = await fetch(e.request)
// 				const cache = await caches.open(MAP_BOX_CACHE)
// 				cache.put(e.request, response.clone())
// 				return response
// 			}
// 		})())
// 	}
// 	if(MAP_BOX_HOSTNAME.indexOf(new URL(e.request.url).hostname) > -1){
// 		e.respondWith((async () => {
// 			const r = await caches.match(e.request)
// 			if (r){
// 				return r
// 			}else{
// 				const response = await fetch(e.request)
// 				const cache = await caches.open(TIAN_MAP_CACHE)
// 				cache.put(e.request, response.clone())
// 				return response
// 			}
// 		})())
// 	}
// 	// Cesium online
// 	if(CESIUM_ONLINE_HOSTNAME.indexOf(new URL(e.request.url).hostname) > -1){
// 		e.respondWith((async () => {
// 			const r = await caches.match(e.request)
// 			if (r) {
// 				return r
// 			}else{
// 				const response = await fetch(e.request)
// 				const cache = await caches.open(CESIUM_ONLINE_CACHE)
// 				cache.put(e.request, response.clone())
// 				return response
// 			}
// 		})())
// 	}
// 	// Cesium SDK
// 	if(e.request.url.indexOf(CESIUM_URL) > -1){
// 		e.respondWith((async () => {
// 			const r = await caches.match(e.request)
// 			if (r){
// 				return r
// 			}else {
// 				const response = await fetch(e.request)
// 				const cache = await caches.open(CESIUM_SDK_CACHE)
// 				cache.put(e.request, response.clone())
// 				return response
// 			}
// 		})())
// 	}
// 	// 3dtiles
// 	if(e.request.url.indexOf(TILES_URL) > -1){
// 		e.respondWith((async () => {
// 			const r = await caches.match(e.request)
// 			if (r){
// 				return r
// 			}else{
// 				const response = await fetch(e.request)
// 				const cache = await caches.open(TILES_CACHE)
// 				cache.put(e.request, response.clone())
// 				return response
// 			}
// 		})())
// 	}
// 	// model
// 	if(e.request.url.indexOf('warner.glb') > -1 ||
// 		e.request.url.indexOf('geojson') > -1){
// 		e.respondWith((async () => {
// 			const r = await caches.match(e.request)
// 			if (r){
// 				return r
// 			}else{
// 				const response = await fetch(e.request)
// 				const cache = await caches.open(MODEL_CACHE)
// 				cache.put(e.request, response.clone())
// 				return response
// 			}
// 		})())
// 	}
// })
