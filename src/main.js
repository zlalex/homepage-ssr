import Vue from 'vue'
import throttle from 'lodash/throttle'
import App from './App.vue'
import Components from './components/index'
import './styles/index.scss';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import "swiper/swiper-bundle.css";

const isMobile = () => {
  try {
    const bodyElement = document ? document.documentElement : {}
    const isMobile = bodyElement.clientWidth && bodyElement.clientWidth < 1024
    Vue.prototype.$isMobile = isMobile
  } catch (e) { console.error(e) }
}
const __isMobile = throttle(isMobile, 1e3)
__isMobile()

window && window.addEventListener && window.addEventListener('resize', function () {
  __isMobile()
})
Vue.prototype.$EVENT_BUS = new Vue()
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false
Components.forEach(item => {
  Vue.component(item.name, item)
})

new Vue({
  render: h => h(App),
}).$mount('#app')
