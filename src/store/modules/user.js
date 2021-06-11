export default {
    state: () => ({
        name: 'Bugger',
    }),
    getters: {},
    mutations: {
        SET_NAME(state, payload) {
            state.mame = payload
        },
    },
    actions: {
        saveName({ commit }, data) {
            commit('SET_NAME', data)
        },
    },
}
