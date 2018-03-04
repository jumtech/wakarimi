import Vue from 'vue/dist/vue.esm.js';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import routes from './routes.js';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

const app = new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
