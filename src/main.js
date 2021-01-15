import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './registerServiceWorker'
import 'default-passive-events'
import { sync } from 'vuex-router-sync';
import router from './router'
import store from './store'
import axios from 'axios';
Vue.use(ElementUI);
const unsync = sync(store, router);
console.log(unsync())
Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        sessionStorage.removeItem('user');
    }
    var user = sessionStorage.getItem('user');
    if (!user && to.path !== '/login') {
        next({
            path: '/login'
        })
    } else {
        next();
    }
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')