<script setup>
import { ref } from 'vue'
const number = ref(0)
const emit = defineEmits(['notificar'])

function aumentar(){
    number.value++;
   if(number.value >= 5){
        notificar()
    }

}

function notificar(){
    emit('notificar', number.value)
}


</script>

<template>

    <h2>
        2. Desenvolver um componente com contador que emite um evento para o 
        pai ao atingir um valor específico
    </h2>

    <p>Number: {{ number }}</p>
    <button @click="aumentar">Aumentar</button>
    


</template>

<style scoped>

</style>