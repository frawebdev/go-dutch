import axios from 'axios'
import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"

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
    },
    actions: {
        getUser(context) {
            axios.get('/api/user')
            .then(res => {
                context.commit('getUser', res.data)
            })
        }   
    },
    plugins: [createPersistedState()]
})

export default store