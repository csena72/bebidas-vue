<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const paginaInicio = computed(() => route.name === 'inicio')


</script>

<template>
    <header
        class="bg-slate-800"
        :class="{'header': paginaInicio}"
    >
        <div class="mx-auto container px-5 py-16">
            <div class="flex items-center justify-between">
                <div>
                    <RouterLink 
                        :to="{name: 'inicio'}"
                    >
                        <img class="w-32" src="/img/logo.svg" alt="logotipo" />
                    </RouterLink>
                </div>

                <nav class="flex gap-4">
                    <RouterLink
                        :to="{name: 'inicio'}"
                        class="text-white uppercase font-bold"
                        active-class="text-orange-500"
                    >
                        Inicio
                    </RouterLink>
                    
                    <RouterLink
                        :to="{name: 'favoritos'}"
                        class="text-white uppercase font-bold"
                        active-class="text-orange-500"
                    >
                        Favoritos
                    </RouterLink>
                </nav>
            </div>

            <form
                v-if="paginaInicio"
                class="md:w-1/2 2xl:w1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
            
            >

                <div class="space-y-8">
                    <label 
                        for="ingrediente"
                        class="block text-white uppercase font-extrabold text-lg"
                    >
                        Nombre o Ingredientes
                    </label>
                    <input 
                        id="ingrediente"
                        type="text"
                        class="p-3 w-full rounded-lg focus:outline-none"
                        placeholder="Nombre o Ingrediente: ej. vodka, tequila, triple sec..."
                    >
                </div>

                <div class="space-y-8">
                    <label 
                        for="categoria"
                        class="block text-white uppercase font-extrabold text-lg"
                    >
                        Categoría
                    </label>
                    <select
                        id="categoria"
                        type="text"
                    >
                        <option
                            value=""
                            selected
                        >
                            -- Seleccione --
                        </option>
                    </select>
                </div>
                <input
                    type="submit"
                    class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase"
                    value="Buscar Recetas"
                >
            </form>
        </div>
    </header>
</template>

<style>
    .header {
        background-image: url('/img/bg.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    }
</style>
