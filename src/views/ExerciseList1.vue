<script setup>
    import FirstExercise from '../components/exercises1/FirstExercise.vue';
    import SecondExercise from '../components/exercises1/SecondExercise.vue';
    import ThirdExercise from '../components/exercises1/ThirdExercise.vue';
    import ThirdExercise2 from '../components/exercises1/ThirdExercise2.vue';
    import { RouterLink, RouterView } from 'vue-router';
    import { ref } from 'vue'


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

    <nav> 
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="Exercises2">Exercises 2</RouterLink>
    </nav>



    <FirstExercise text="1. Criar um componente que receba um nome via props e exiba uma saudação personalizada" saudacao="Olá Mundo!"/>
    <SecondExercise @notificar="popup"/>
    <ThirdExercise @chang="muda" :variavel="opcaoA"/>
    <ThirdExercise2 @chang="muda" :variavel="opcaoB"/>

</template>