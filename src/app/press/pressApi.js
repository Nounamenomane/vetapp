import axios from "axios";

const api = axios.create({
    baseURL: 'https://64c2579deb7fd5d6ebcfa937.mockapi.io/house1'
})

const Api = {
    getNews: () => api.get()
}

export default Api