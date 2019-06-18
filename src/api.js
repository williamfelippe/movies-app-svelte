import axios from 'axios'

axios.defaults.baseURL = process.env.BASE_URL

axios.interceptors.request.use((config) => {
    const customConfig = {
        ...config,
        url: `${config.url}&apikey=${process.env.API_KEY}&type=movie`
    }

    return customConfig
}, (error) => {
    return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    return Promise.reject(error)
})

export default axios
