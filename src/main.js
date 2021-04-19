import Vue from 'vue'
import App from './App.vue'
// import News from './views/News.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from '@/plugins/vuetify'
import './assets/iconfont/iconfont.css'
axios.defaults.baseURL = 'https://github.com/Ws1118'

Vue.use(VueAxios, axios)
// Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
