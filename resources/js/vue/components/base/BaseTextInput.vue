<template>
    <div>
        <label for="text-input">{{ label }}</label>
        <input 
        type="text"
        name="text-input"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        >
    </div>
</template>

<script setup>

defineProps(['label', 'modelValue'])
defineEmits([
    'update:modelValue'
])

</script>