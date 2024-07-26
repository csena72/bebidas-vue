import api from '../lib/axios'

export default {

    obtenerCocktails: async () => {
        const { data } = await api.get('/list.php?c=list')
        return data
    },
    
    obtenerCocktailPorNombre: async (nombre) => {
        const { data } = await api.get(`/search.php?s=${nombre}`)
        return data
    }
}
