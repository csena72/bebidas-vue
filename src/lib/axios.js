import axios from 'axios'


const url = 'https://www.thecocktaildb.com/api/json/v1/1/'

const api = axios.create({
    baseURL: url
})

export default api