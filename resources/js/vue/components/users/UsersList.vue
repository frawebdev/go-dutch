<template>
    <div>
        <BaseTextInput 
        label="Insert your room's name"
        v-model="roomName"
        />
        <ul v-for="user in users" :key="user.id">
            <li @click="storeUser(user.id)">
                <div>{{ user.name }}</div>
                <div>{{ user.email }}</div>
            </li>
        </ul>
        <BaseButton 
        text="create room"
        @handleClick="$emit('createRoom', selectedUsers, roomName)"
        />
    </div>
</template>

<script>
import BaseButton from '../base/BaseButton.vue'
import BaseTextInput from '../base/BaseTextInput.vue'

export default {
    components: {
        BaseButton,
        BaseTextInput
    },
    data() {
        return {
            users: null,
            selectedUsers: null,
            roomName: ''
        }
    },
    mounted() {
        axios.get('/api/users')
        .then(res => {
            this.users = res.data
        })
    },
    methods: {
        storeUser(id) {
            this.selectedUsers.push(id)
        }
    }
}
</script>