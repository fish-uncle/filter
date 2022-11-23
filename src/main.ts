import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Map from '@/core/Map'
import { createPinia } from 'pinia'
const store = createPinia()
import './styles/index.scss'
import './styles/font.scss'
import loadMore from '@/directives/loadMore'
import customClick from '@/directives/customClick'
import components from '@/components'
import sw from './sw'

const app = createApp(App)
app.use(router)
app.use(store)
app.directive('load-more', loadMore)
app.directive('custom-click', customClick)

components.forEach(item => {
	app.component(item.name, item)
})

sw()
window.map = Map.Instance()

app.mount('#app')
