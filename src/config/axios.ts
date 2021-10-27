import {AxiosRequestConfig} from "axios"

const configAxios: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_BASE_API,
}

export default configAxios
