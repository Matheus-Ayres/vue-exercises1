<script setup>
const props = defineProps({
    variavel: String
})


const emit = defineEmits(['chang'])

 function  mudar(){
    notifi()
}

 function notifi(){
    emit('chang',)
}

</script>

<template>
  
  <button class="button" @mouseenter="mudar">{{ variavel }}</button>
</template>

<style>
    .button{
        background-color: black;
        color: white;
        font-family: sans-serif;
        font-size: 25px;
        border: 2px solid white;
        padding: 10px;
        border-radius: 50px;    
        margin-left: 50px;
    }

</style>