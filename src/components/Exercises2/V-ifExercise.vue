<script setup>
import { ref } from 'vue';
const active = ref(false);

function showhide(){
    // if (active.value == false){
    //     active.value = true
    // }else{
    //     active.value = false
    // }

    active.value = !active.value
}

</script>

<template>
    <h2>3. Implementar controle condicional de exibição utilizando v-if com base em uma variável booleana</h2>

    <button @click="showhide">
        <span v-if="!active"> Show</span>
        <span v-else>Hide </span>
    </button>

    <div>
        <div v-if="active == true">Oi</div>
    </div>
</template>