<script setup>
import { ref } from 'vue';
import FirstExercise from './components/FirstExercise.vue';
import SecondExercise from './components/SecondExercise.vue';
import ThirdExercise from './components/ThirdExercise.vue';
import ThirdExercise2 from './components/ThirdExercise2.vue';


const opcaoA = ref('sim')
const opcaoB = ref ('nao')

function muda(){
  let auxiliar = opcaoA.value 
  opcaoA.value = opcaoB.value
  opcaoB.value = auxiliar
}

function popup(valor){
  alert('Chegou a ' + valor)
}

</script>

<template>

<FirstExercise text="1. Criar um componente que receba um nome via props e exiba uma saudação personalizada" saudacao="Olá Mundo!"/>
<SecondExercise @notificar="popup"/>
<ThirdExercise @chang="muda" :variavel="opcaoA"/>
<ThirdExercise2 @chang="muda" :variavel="opcaoB"/>


</template>

<style scoped>

</style>
