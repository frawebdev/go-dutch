<template>
    <div>
        <div>
        <BaseTextInput 
        v-if="!registered"
        label="name"
        v-model="name"
        />
        <BaseTextInput 
        label="email"
        v-model="email"
        />
        <BaseTextInput 
        label="password"
        v-model="password"
        />
        <BaseButton 
        text="Enter"
        @handleClick="auth"
        />
        </div>
        <div>
            <BaseButton 
            v-if="!registered"
            text="I'm already registered"
            @handleClick="registered = true"
            />
            <BaseButton 
            v-if="registered"
            text="I'm not registered"
            @handleClick="registered = false"
            />
        </div>
        <div v-if="error">
            {{ error }}
        </div>
    </div>
</template>

<script>
//packages
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, maxLength, alphaNum } from '@vuelidate/validators'
//components
import BaseTextInput from '../components/base/BaseTextInput.vue'
import BaseButton from '../components/base/BaseButton.vue'

export default {

    components: {
        BaseTextInput,
        BaseButton
    },
    data() {

        return {
            v$: useVuelidate(),
            name: '',
            email: '',
            password: '',
            error: '',
            registered: false
        }
    },
    validations() {

        return {
            name: { minLength: minLength(5), maxLength: maxLength(12) },
            email: { required, email },
            password: { required, minLength: minLength(8), maxLength: maxLength(18), alphaNum }
        }
    },
    methods: {

        auth() {
            let route = null
            let body = null

            this.v$.$validate()

            if(!this.v$.$error) {

                const headers = {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }

                if(!this.registered) {
                    body = {
                        name: this.name,
                        email: this.email,
                        password: this.password
                    }
                    route = '/api/register'
                } else {
                        body = {
                        email: this.email,
                        password: this.password
                    }
                    route = '/api/login'
                }

                axios.get('/sanctum/csrf-cookie').then(res => {
                    axios.post(route, body, { headers: headers })
                    .then(res => {
                        if(res.status == 200) {
                            this.$router.push('/')
                        }
                    })
                    .catch(err => {
                        console.log(err)
                        this.error = err.message
                    })
                })

            } else {
                console.log(this.v$.$errors)
            }
        }
    }

}

</script>



