import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useFavoritosStore } from './favoritos' 
import { useBebidasStore } from './bebidas'


export const useModalStore = defineStore('modal', () => {

    const favoritos = useFavoritosStore()
    const modal = ref(false)
    const bebidas = useBebidasStore()

    function handleClickModal() {
        modal.value = !modal.value
    }

    const textoBoton = computed(() => {
        if(modal.value) {
            return favoritos.existeFavorito(bebidas.receta.idDrink) ? 'Eliminar de favoritos' : 'Añadir a favoritos'
        }
    })

    return {
        modal,
        textoBoton,
        handleClickModal,
    }
})