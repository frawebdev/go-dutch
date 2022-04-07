<template>
    <div>
        <label for="text-input">{{ label }}</label>
        <input 
        :type="type"
        name="text-input"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        >
    </div>
</template>

<script setup>

defineProps(['label', 'modelValue', 'type'])
defineEmits(['update:modelValue'])

</script>