<template>
    <div>
        <ul v-for="room in rooms" :key="room.id">
            <li>
                <router-link :to="'/room/' + room.id">
                {{ room.title }}
                </router-link>
            </li>
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
        axios.get('/api/rooms/' + this.$store.state.user.id)
        .then(res => {
            this.rooms = res.data
        })
    }
}

</script>