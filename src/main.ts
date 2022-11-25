import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Map from '@/core/Map'
import { createPinia } from 'pinia'
const store = createPinia()
import './styles/index.scss'
import './styles/font.scss'
import components from '@/components'
import sw from './sw'

const app = createApp(App)
app.use(router)
app.use(store)

components.forEach(item => {
	app.component(item.name, item)
})

sw()
window.map = Map.Instance()

app.mount('#app')
