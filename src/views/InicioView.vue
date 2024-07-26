<script setup>
import Receta from '../components/Receta.vue'
import { useBebidasStore } from '../stores/bebidas'


const bebidas = useBebidasStore()

</script>

<template>
    <div class="mx-auto container px-5 py-10">
        <h1 class="text-5xl font-extrabold">Recetas</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
            <Receta
            v-for="receta in bebidas.recetas"
            :receta="receta"
            :key="receta.idDrink"
            />
        </div>
    </div>
    
</template>

