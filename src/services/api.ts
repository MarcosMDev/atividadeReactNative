import axios from 'axios'

const api = axios.create({
    baseURL: 'http://example-ecommerce.herokuapp.com',
    headers: {
        Accept: 'application/json'
    }
})

export default api 