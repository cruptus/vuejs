// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.http.options.root = 'http://jsonplaceholder.typicode.com'
const router = new VueRouter({
  mode: 'history',
  routes: [{path: '/', component: require('./components/Hello.vue')}]
})

import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
