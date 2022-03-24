import { createStore } from 'vuex'

const store = createStore({
    state() {

        return {
            loggingToken: null,
            user: null
        }
    },
    mutations: {
        getLoggingToken(state, token) {
            state.loggingToken = token
        }
    }
})