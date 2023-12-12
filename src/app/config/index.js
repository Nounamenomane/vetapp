import axios from "axios";



const api = axios.create({
    baseURL: 'OurApi'
})

const Api = {
    getInfo: () => api.get()
}

export default Api