import api from '../lib/axios'

export default {

    obtenerCocktails() {
        return api.get('/list.php?c=list')
    },
    
    obtenerCocktailPorNombre({categoria, nombre}) {
        return  api.get(`/filter.php?c=${categoria}&i=${nombre}`)
    },

    obtenerReceta(id) {
        return api.get(`/lookup.php?i=${id}`)
    }
}
