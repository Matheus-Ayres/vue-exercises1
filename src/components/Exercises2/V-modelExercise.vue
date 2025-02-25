<script setup>
import { ref } from 'vue';
const color= ref();
const emit = defineEmits(['CorNova'])

function ChangeColor(){
    emit('CorNova', color.value)
}

</script>

<template>

<body>
    <h2>2. Desenvolver um componente com um color picker que utilize v-model para capturar a cor 
        e v-bind:style para alterar o fundo da página</h2>
        
    <input @change="ChangeColor" type="color" v-model="color" >
</body>
</template>