import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://rocketmovies-api-1ww4.onrender.com',
})
