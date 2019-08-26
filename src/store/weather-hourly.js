import axios from 'axios';
export default {
    state: {
        hourlyWeather: null
    },
    getters: {
        hourlyWeather: state => state.hourlyWeather
    },
    mutations: {
        SET_HOURLY_WEATHER(state, data) {
            var temp = data;
            temp.list = temp.list.slice(0, 6);
            state.hourlyWeather = temp;
        }
    },
    actions: {
        async fetchHourlyWeather({ commit }, id) {
            const response = await axios.get('http://api.openweathermap.org/data/2.5/forecast/', {
                params: {
                    id,
                    appid: '0247a1854c9fc1bf26839f6ae6610f2c',
                    units: 'metric',
                    limit: 6
                }
            })
            commit('SET_HOURLY_WEATHER', response.data)
        }

    }
}