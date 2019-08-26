
import axios from 'axios'
import store from '../store/index'
import Vue from 'vue';

axios.interceptors.request.use(config => {
    store.commit('SET_LOADER', true);
    return config;
});

axios.interceptors.response.use(response => {
    store.commit('SET_LOADER', false);
    return Promise.resolve(response);
}, error => {
    store.commit('SET_LOADER', false);
    Vue.prototype.$notify({
        group: 'foo',
        title: 'Error' + error.response.status,
        type: "error",
        text: error.response.data.message
    });
    return Promise.reject(error);
});