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
    <h2>
        3. Integrar dois componentes onde um altera o estado do outro via props e eventos
    </h2>

    <button class="button" @mouseenter="mudar">{{ variavel }}</button>

</template>
