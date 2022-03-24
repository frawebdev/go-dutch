<template>
    <button
    @click="$emit('handleClick')"
    >
    {{ text }}
    </button>
</template>

<script setup>

defineProps(['text'])

</script>