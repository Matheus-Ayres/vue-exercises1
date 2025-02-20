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
  
  <button @click="mudar">{{ variavel }}</button>
</template>