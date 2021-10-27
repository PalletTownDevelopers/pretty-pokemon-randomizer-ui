import axios, {AxiosInstance, AxiosResponse} from "axios"
import configAxios from "../config/axios"
import {RomParams} from "../interfaces/RomParams"

export class RandomizerApi {
    client: AxiosInstance

    constructor() {
        this.client = axios.create(configAxios)
    }

    async generateRom(params: RomParams): Promise<AxiosResponse<string>> {
        return this.client.post("/v1/pretty-pokemon-randomizer/generate-rom", params, {})
    }
}
