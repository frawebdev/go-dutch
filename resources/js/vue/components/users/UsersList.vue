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
        @handleClick="emitCreateRoomEvent"
        />
        <div v-if="v$.$errors">
            <div v-for="error in v$.$errors" :key="error.$message">
                {{ error.$message }}
            </div>
        </div>
    </div>
</template>

<script>
//packages
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, maxLength } from '@vuelidate/validators'
//components
import BaseButton from '../base/BaseButton.vue'
import BaseTextInput from '../base/BaseTextInput.vue'

export default {
    components: {
        BaseButton,
        BaseTextInput
    },
    data() {
        return {
            v$: useVuelidate(),
            users: null,
            selectedUsers: [],
            roomName: ''
        }
    },
    mounted() {
        axios.get('/api/users')
        .then(res => {
            this.users = res.data
        })
    },
    validations() {

        return {
            roomName: { minLength: minLength(5), maxLength: maxLength(12) }
        }
    },
    methods: {
        storeUser(id) {
            if(!this.selectedUsers.includes(id)) {
                this.selectedUsers.push(id)
            }
            else {
                let itemIndex = this.selectedUsers.indexOf(id)
                this.selectedUsers.splice(itemIndex, 1)
            }
        },
        emitCreateRoomEvent() {
            this.v$.$validate()

            if(!this.v$.$error) {
                this.$emit('createRoomEvent', this.selectedUsers, this.roomName)
            }
        }
    }
}
</script>