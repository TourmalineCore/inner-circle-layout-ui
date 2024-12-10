import axios from 'axios'
import { API_ROOT } from '../config'

// import { initApiInterceptors } from './../api/initApiInterceptors'

export const api = axios.create({
  baseURL: API_ROOT,
})

// initApiInterceptors(api)
