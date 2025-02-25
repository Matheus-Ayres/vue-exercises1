<script setup>
    defineProps({
        saudacao: String,
        text: String
    })

</script>

<template>
    <h1>Exercise List 1</h1>
    <h2> 
        {{ text }}
    </h2>
    <p>
        {{ saudacao }}
    </p>


</template>

<style scoped>

</style>