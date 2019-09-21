import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import './assets/commen/normalize.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
Vue.config.productionTip = false
//事件总线   非父子组件的通信
Vue.prototype.$bus=new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
