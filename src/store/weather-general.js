import axios from 'axios';
export default {
    state: {
        generalWeather: null
    },
    getters: {
        generalWeather: state => state.generalWeather
    },
    mutations: {
        SET_GENERAL_WEATHER(state, data) {
            state.generalWeather = data;
        }
    },
    actions: {
        async fetchGeneralWeather({ commit }, city) {
            const response = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
                params: {
                    q: city,
                    appid: '0247a1854c9fc1bf26839f6ae6610f2c',
                    units: 'metric'
                }
            })
            commit('SET_GENERAL_WEATHER', response.data)
        }

    }
}