import Vue from 'vue'
import App from './App.vue'
import Components from './components/index'
import './styles/index.scss';

Components.forEach(item => {
  Vue.component(item.name, item)
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
