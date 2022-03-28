<template>
    rooms list
    {{ user }}
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const user = computed(() => {
    store.state.user
})

console.log(user)

</script>