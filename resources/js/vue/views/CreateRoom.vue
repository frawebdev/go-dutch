<template>
    <div>
        <h1>Create room</h1>
        <UsersList 
        />
    </div>
</template>

<script>
//packages
import useVuelidate from '@vuelidate/core'
import { required, minLength, alphaNum } from '@vuelidate/validators'
//components
import UsersList from '../components/users/UsersList.vue'
import BaseTextInput from '../components/base/BaseTextInput.vue'

export default {
    components: {
        UsersList,
        BaseTextInput
    }
}
</script>