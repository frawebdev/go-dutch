import axios from 'axios'
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
    },
    actions: {
        async getUser(context) {
            await axios.get('/api/user')
            .then(res => {
                context.commit('getUser', res.data)
            })
        }   
    }
})

export default store