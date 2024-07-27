import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import { useBebidasStore } from './bebidas'
import { useModalStore } from './modal'

export const useFavoritosStore = defineStore('favoritos', () => {

    const bebidas = useBebidasStore()
    const modal = useModalStore()

    const favoritos = ref([])

    const router = useRouter()

    onMounted(async function() {
        favoritos.value = JSON.parse(localStorage.getItem('favoritos')) ?? []
    })

    watch(favoritos, () => {
        sincronizarLocalStorage()
    }, { deep: true })

    function sincronizarLocalStorage() {
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
    }

    function existeFavorito(id) {
        const favoritosLocalStorage = JSON.parse(localStorage.getItem('favoritos')) ?? []
        return favoritosLocalStorage.some(favorito => favorito.idDrink === id)
    }

    function agregarFavorito() {
        favoritos.value.push(bebidas.receta)
    }

    function eliminarFavorito() {
        favoritos.value = favoritos.value.filter(favorito => favorito.idDrink !== bebidas.receta.idDrink)
    }
    function handleClickFavorito() {
        (existeFavorito(bebidas.receta.idDrink)) ? eliminarFavorito() : agregarFavorito()
        modal.modal = false
    }

    return {
        favoritos,
        handleClickFavorito,
        existeFavorito,
    }
})