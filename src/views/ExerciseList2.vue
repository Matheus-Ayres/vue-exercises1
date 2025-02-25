<script setup>
import Vmodel from '../components/Exercises2/V-modelExercise.vue'
import Vfor from '../components/Exercises2/V-forExercise.vue'
import Vif from '../components/Exercises2/V-ifExercise.vue'
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';
const color = ref()


function BgColor(newcolor){
    color.value = newcolor
}


</script>

<template>

<body :style = "{'background-color': color}">
    <nav> 
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="Exercises1">Exercises 1</RouterLink>
    </nav>
    
    <h1>Exercise List 2</h1>
    
    
    <Vfor/>
    <br>
    <Vmodel @CorNova="BgColor"/>
    <br>
    <Vif/>
</body>
</template>
