import axios, { AxiosInstance } from 'axios'

let apiSingleton: AxiosInstance | null = null

function useApi() {
  if (!apiSingleton) {
    apiSingleton = axios.create({
      //baseURL from .env
      baseURL: import.meta.env.VITE_API_URL,
    })
  }
  return apiSingleton
}

export default useApi
