import 'babel-polyfill'

import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './vuex/store'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'element-ui/lib/theme-default/reset.css'
import './js/iconfont.js'

Vue.use(Vuex)
Vue.use(ElementUI)

axios.defaults.baseURL = '/api'
Vue.prototype.$ajax = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
