export default {
    state: () => ({
        userName: 'jsmith'
       
    }),

    getters: {
        //
    },

    mutations: {
       SET_USER_NAME(state,payload) {
        state.userName = payload;
       }
    },

    actions: {
        saveUserName({commit},data) {
            commit('SET_USER_NAME',data);
        }       
    },
}
