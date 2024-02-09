import axios, { AxiosInstance,  } from "axios"
import { httpConfig } from "./httpConfig"
import {getCookie} from 'cookies-next'


export const clientSide: AxiosInstance = axios.create(httpConfig)

clientSide.interceptors.request.use(
  (config) => {
    // we can handle params here.
    const token= getCookie('token')
    if(token){
      config.headers.Authorization = `Token ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

clientSide.interceptors.response.use(
  (response) => {
    // we can handle response here.
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
