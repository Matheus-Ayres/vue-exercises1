<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <main>
        <div class="routes">
            <RouterLink to="Exercises1">Exercise List 1</RouterLink>
            <RouterLink to="Exercises2">Exercise list 2</RouterLink>
        </div>
    </main>
        
<RouterView/>
</template>

<style scoped>
  .routes{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;   width: 100vw;
    height: 100vh;
    gap: 20px;
  }



</style>