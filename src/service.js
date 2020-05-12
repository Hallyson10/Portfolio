import axios from 'axios'

const api = axios.create({
    baseURL : 'https://portfolio-project-x19.herokuapp.com/'
})
export default api;