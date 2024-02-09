import axios, { AxiosInstance,  } from "axios"
import { httpConfig } from "./httpConfig"
import { cookies } from "next/headers"



export const serverSide: AxiosInstance = axios.create(httpConfig)

serverSide.interceptors.request.use(
  (config) => {
    const token=cookies().get('token')?.value
    if(token){
      config.headers.Authorization = `Token ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

serverSide.interceptors.response.use(
  (response) => {
    // we can handle response here.
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)