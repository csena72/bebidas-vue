import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import { useBebidasStore } from './bebidas'

export const useFavoritosStore = defineStore('favoritos', () => {

    const bebidas = useBebidasStore()
    const favoritos = ref([])

    const router = useRouter()

    onMounted(async function() {
        favoritos.value = JSON.parse(localStorage.getItem('favoritos')) ?? []
    })

    watch(favoritos, () => {
        sincronizarLocalStorage()
    }, { deep: true })

    const sincronizarLocalStorage = () => {
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
    }

    function handleClickFavorito() {
        favoritos.value.push(bebidas.receta)
        router.push('/favoritos')
        
    }

    return {
        favoritos,
        handleClickFavorito
    }
})