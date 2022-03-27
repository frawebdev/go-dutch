<template>
    <div>
        
    </div>
</template>

<script>
export default {
    mounted() {
        axios.get('/api/users')
        .then(res => console.log(res))
    }
}
</script>