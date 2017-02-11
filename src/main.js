// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import routes from './routers';
import store from './vuex/store';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
    // mode: 'history',
    routes
});

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app');
