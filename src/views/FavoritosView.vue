<script setup>
import { useFavoritosStore } from '../stores/favoritos'
import Receta from '../components/Receta.vue'


const favoritos = useFavoritosStore()


</script>

<template>
    <div class="mx-auto container px-5 py-16">
        <h1 class="text-5xl font-extrabold">Favoritos</h1>

        <p v-if="favoritos.noFavoritos" class="text-2xl font-bold my-10 text-center">No hay favoritos</p>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">

            <Receta
            v-for="receta in favoritos.favoritos"
            :receta="receta"
            :key="receta.idDrink"
            />

        </div>
    </div>
</template>



