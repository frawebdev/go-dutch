<template>
    <div>
        <h1>Create room</h1>
        <UsersList 
        @createRoomEvent="createRoom"
        />
    </div>
    {{ user }}
</template>

<script>
//packages
import { useStore } from 'vuex'
//components
import UsersList from '../components/users/UsersList.vue'
import BaseTextInput from '../components/base/BaseTextInput.vue'

export default {
    data() {

        return {
            store: useStore()
        }
    },
    components: {
        UsersList,
        BaseTextInput
    },
    methods: {
        createRoom(users, title) {
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

            const body = {
                title,
                users,
                admin_id: this.$store.state.user.id
            }

            axios.post('/api/store', body, { headers: headers })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        }
    }
}

</script>