import Vue from 'vue'
import Vuex from 'vuex'
import device from './device.js';
import one from './one.js';
import personnel from './personnel.js';
import statement from './statement';
import system from './system';
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
    },
    mutations: {
        setLoginInfo(state, data) {
            state.Authorization = data.Authorization;
            localStorage.setItem('Authorization', data.Authorization);
        },
    },
    actions: {},
    modules: {
        device,
        one,
        personnel,
        statement,
        system
    },
})