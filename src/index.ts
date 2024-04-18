import axios, { AxiosInstance } from 'axios'
import { Affinities, Api, Regions } from './swagger.build'

// ValorantAPI Class

export class ValorantUser {
  public name: string
  public tag: string
  public affinity: Affinities
  private api: Api<null>

  /**
   * @param name - The name of the Valorant user.
   * @param tag - The tag of the Valorant user.
   * @param affinity - The region of the Valorant user.
   */
  constructor(name: string, tag: string, affinity: Affinities) {
    this.name = name
    this.tag = tag
    this.affinity = affinity
    this.api = new Api({})
  }

  async getAccount() {
    return this.api.valorant.v1AccountDetail(this.name, this.tag)
  }

  async getMMR() {
    return this.api.valorant.v1MmrDetail(this.name, this.tag, this.affinity)
  }
}
