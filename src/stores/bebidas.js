import { ref, reactive, onMounted } from 'vue'
import { defineStore } from 'pinia'
import APIService from '../services/APIService'


export const useBebidasStore = defineStore('bebidas', () => {
    
    const categorias = ref([])
    const busqueda = reactive({
        nombre: '',
        categoria: ''
    })
    
    const recetas = ref([])

    onMounted(async function() {
        const data = await APIService.obtenerCocktails()
        categorias.value = data.drinks
    })

    async function obtenerRecetas() {
        const data = await APIService.obtenerCocktailPorNombre(busqueda.nombre)
        recetas.value = data.drinks
    }

    return {
        categorias,
        busqueda,
        obtenerRecetas,
        recetas,
    }
})
