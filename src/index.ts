import axios, { AxiosInstance } from 'axios'
import { AccountData, ErrorDetail, MMRData, Regions } from './types'

// ValorantAPI Class

export class ValorantUser {
  public name: string
  public tag: string
  public affinity: Regions
  public api: AxiosInstance

  constructor(name: string, tag: string, affinity: Regions) {
    this.name = name
    this.tag = tag
    this.affinity = affinity
    this.api = axios.create({
      baseURL: 'https://api.henrikdev.xyz/valorant',
    })
  }

  async handleRequest<T>(endpoint: string) {
    try {
      const response = await this.api.get(endpoint)
      if (response.status === 200) {
        return response.data.data as T
      } else {
        const errors = response.data.errors as ErrorDetail[]
        console.error(errors)
        return null
      }
    } catch (error) {
      throw new Error('Something went wrong while fetching data. From the server.')
    }
  }

  async getAccount() {
    return this.handleRequest<AccountData>(`/v1/account/${this.name}/${this.tag}`)
  }

  async getMMR() {
    return this.handleRequest<MMRData>(`/v2/mmr/${this.affinity}/${this.name}/${this.tag}`)
  }
}
