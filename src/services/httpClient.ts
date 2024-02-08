import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
const config: AxiosRequestConfig = {
  baseURL: "http://64.226.66.94/api",
  headers: {
    Authorization: 'Token 8a90a30c1e956d9833e2735433467b93fbaf1906'
  },
}

export const clientSide: AxiosInstance = axios.create(config)

export const getProducts = () => clientSide.get("/products/")