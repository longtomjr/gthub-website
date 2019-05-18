import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueRouter);

Vue.use(VueAxios, axios);

const router = new VueRouter({
  routes: [{
    path: '/events',
    name: 'EVENTS',
    component: () => import("@/views/Events"),
  }]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
