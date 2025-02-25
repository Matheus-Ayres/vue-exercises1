<script setup>
const items = ['Item 1', 'Item 2', 'Item 3'];


</script>


<template>
    <h2>1. Criar um componente que renderize uma lista de itens usando v-for</h2>

    <ul>
        <li v-for="(item, index) in items" :key="index"> {{ item }} </li>
    </ul>

</template>

