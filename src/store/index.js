import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import weatherGeneral from './weather-general';
import weatherHourly from './weather-hourly';
import loader from './loader';


export default new Vuex.Store({
    modules: {
        weatherGeneral,
        weatherHourly,
        loader
    }
})