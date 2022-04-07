<template>
    <div>
        <BaseInput 
        label="Add expense"
        type="number"
        v-model="expense"
        />
        <BaseButton 
        text="add expense"
        @handleClick="addExpense"
        />
    </div>
</template>

<script>
//components
import BaseInput from '../base/BaseInput.vue'
import BaseButton from '../base/BaseButton.vue'
//packages
import axios from 'axios'

export default {
    components: {
        BaseInput,
        BaseButton
    },
    props: ['roomId'],
    data() {

        return {
            expense: null
        }
    },
    methods: {
        addExpense() {
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

            const body = {
                outcome: this.expense,
                roomId: this.$props.roomId
            }

            axios.put('/api/user/' + this.$store.state.user.id, body, { headers: headers })
                .then(res => console.log(res.data))
        }
    }
}
</script>