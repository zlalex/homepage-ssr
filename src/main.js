import Vue from 'vue'
import App from './App.vue'
import Components from './components/index'
import './styles/index.scss';

Components.forEach(item => {
  Vue.component(item.name, item)
})

const __global = window || {}
const isMobile = __global.width < 1024
Vue.prototype.$isMobile = isMobile
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
