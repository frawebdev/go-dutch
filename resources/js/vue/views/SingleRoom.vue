<template>
<div v-if="room">
    <h2>{{ room.title }}</h2>
    <div v-for="user in room.users" :key="user.id">
        <h3>{{ user.name }}</h3>
        <h5>{{ user.email }}</h5>
        <p>{{ user.income }}</p>
        <p>{{ user.outcome }}</p>
    </div>
    <add-expense-form 
    :roomId="room.id"
    />
</div>
</template>

<script>
import addExpenseForm from '../components/rooms/addExpenseForm.vue'

export default {
    components: {
        addExpenseForm
    },
    data() {
        return {
            room: null
        }
    },
    mounted() {
        axios.get('/api/room/' + this.$route.params.id)
        .then(res => {
            console.log(res.data)
            this.room = res.data[0]
        })
    }
}
</script>