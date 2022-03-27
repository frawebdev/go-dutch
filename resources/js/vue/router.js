import axios from 'axios'
import { createRouter, createWebHistory } from 'vue-router'
import Auth from './views/Auth'
import RoomsList from './views/RoomsList'

const requireAuth = async (to, from, next) => {

    let user = await axios.get('/api/user')
    .then(res => {
        return res.data
    })
    .catch(err => {
        return null
    })

    if(!user) {
        next({ name: 'auth' })
    }
    else {
        next()
    }
}

const routes = [
    {
        path: '/',
        component: RoomsList,
        name: 'rooms-list',
        beforeEnter: requireAuth
    },
    {
        path: '/auth',
        component: Auth,
        name: 'auth'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router