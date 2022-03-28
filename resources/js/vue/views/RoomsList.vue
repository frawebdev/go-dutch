<template>
    <div>
        <ul v-for="room in rooms" :key="room.id">
            <li>{{ room.title }}</li>
        </ul>
        <router-link to="/create-room">create new room</router-link>
    </div>
</template>

<script>

export default {
    data() {
        
        return {
            rooms: null
        }
    },
    mounted() {
        console.log(this.$store.state.user.id)
        axios.get('/api/rooms/' + this.$store.state.user.id)
        .then(res => {
            this.rooms = res.data
        })
    }
}

</script>