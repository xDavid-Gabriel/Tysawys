import axios from 'axios'

const token = process.env.API_TOKEN

const pagesApi = axios.create({
  baseURL: process.env.API,
  headers: {
    'x-access-token': token,
  },
})

export default pagesApi
