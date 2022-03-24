import { createRouter, createWebHistory } from 'vue-router'
import Auth from './views/Auth'
import RoomsList from './views/RoomsList'

const routes = [
    {
        path: '/',
        component: RoomsList,
        name: 'rooms-list'
    },
    {
        path: '/auth',
        component: Auth,
        name: 'auth'
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router