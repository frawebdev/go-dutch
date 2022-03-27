<template>
    <div>
        
    </div>
</template>

<script>
//packages
import useVuelidate from '@vuelidate/core'
import { required, minLength, alphaNum } from '@vuelidate/validators'
//components
import BaseTextInput from '../components/base/BaseTextInput.vue'

export default {
    components: {
        BaseTextInput
    }
}
</script>