export default {
    state: {
        isLoading: false
    },
    getters: {
        isLoading: state => state.isLoading
    },
    mutations: {
        SET_LOADER(state, isLoading) {
            state.isLoading = isLoading;
        }
    },

}