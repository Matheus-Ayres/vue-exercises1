<script setup>
import FirstExercise from './components/FirstExercise.vue';
import SecondExercise from './components/SecondExercise.vue';

function popup(valor){
  alert('Chegou a ' + valor)
}

</script>

<template>

<FirstExercise saudacao="Olá Mundo!"/>
<SecondExercise @notificar="popup"/>


</template>

<style scoped>

</style>
