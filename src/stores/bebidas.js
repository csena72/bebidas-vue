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
        const {data} = await APIService.obtenerCocktails()
        categorias.value = data.drinks
    })

    async function obtenerRecetas() {
        const { data: { drinks } } = await APIService.obtenerCocktailPorNombre(busqueda)

        recetas.value = drinks
    }

    return {
        categorias,
        busqueda,
        obtenerRecetas,
        recetas,
    }
})
