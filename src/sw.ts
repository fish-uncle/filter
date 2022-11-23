export default async () => {
	if (navigator.serviceWorker !== null) {
		await navigator.serviceWorker.register('sw.js')
	}
}
