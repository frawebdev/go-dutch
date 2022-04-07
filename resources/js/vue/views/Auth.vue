<template>
    <div>
        <div>
        <BaseInput 
        v-if="!registered"
        label="name"
        type="text"
        v-model="name"
        />
        <BaseInput 
        label="email"
        type="email"
        v-model="email"
        />
        <BaseInput 
        label="password"
        type="password"
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
import { useStore } from 'vuex'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, maxLength, alphaNum } from '@vuelidate/validators'
//components
import BaseInput from '../components/base/BaseInput.vue'
import BaseButton from '../components/base/BaseButton.vue'

export default {

    components: {
        BaseInput,
        BaseButton
    },
    data() {

        return {
            v$: useVuelidate(),
            name: '',
            email: '',
            password: '',
            error: '',
            registered: false,
            store: useStore()
        }
    },
    validations() {

        return {
            name: { minLength: minLength(5), maxLength: maxLength(12) },
            email: { required, email },
            password: { required, minLength: minLength(6), maxLength: maxLength(18), alphaNum }
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
                    .then( async (res) => {
                        if(res.status == 200) {
                            await this.store.dispatch('getUser')
                            this.$router.push('/')
                        }
                    })
                    .catch(err => {
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



