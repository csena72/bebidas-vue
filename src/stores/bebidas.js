import { ref, reactive, onMounted } from 'vue'
import { defineStore } from 'pinia'
import APIService from '../services/APIService'
import { useModalStore } from './modal'


export const useBebidasStore = defineStore('bebidas', () => {
    
    const modal = useModalStore()
    const categorias = ref([])
    const busqueda = reactive({
        nombre: '',
        categoria: ''
    })
    
    const recetas = ref([])
    const receta = ref({})

    onMounted(async function() {
        const {data} = await APIService.obtenerCocktails()
        categorias.value = data.drinks
    })

    async function obtenerRecetas() {
        const { data: { drinks } } = await APIService.obtenerCocktailPorNombre(busqueda)

        recetas.value = drinks
    }

    async function seleccionarBebida(id) {
        const { data: { drinks } } = await APIService.obtenerReceta(id)
        receta.value = drinks[0]

        modal.handleClickModal()
    }

    return {
        categorias,
        busqueda,
        recetas,
        receta,
        obtenerRecetas,
        seleccionarBebida,
    }
})
