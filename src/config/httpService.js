import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8001/',
  timeout: 2000
})

export default instance
