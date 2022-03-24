import { createStore } from 'vuex'

const store = createStore({
    state() {

        return {
            user: null
        }
    },
    mutations: {
        getUser(state, data) {
            state.user = data
        }
    }
})