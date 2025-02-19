<script setup>
    defineProps({
        saudacao: String,
        
    })
</script>

<template>
    <h1>Exercise List</h1>
    <h2>
        1. Criar um componente que receba um nome via props e exiba uma saudação personalizada:
    </h2>
    <p>
        {{ saudacao }}
    </p>


</template>

<style scoped>

</style>