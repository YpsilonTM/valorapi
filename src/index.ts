import { Affinities, Api, ContentType } from './swagger.build'

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

  async getContent(query: Parameters<typeof this.api.valorant.v1ContentList>[0]) {
    const response = await this.api.valorant.v1ContentList(query)
    return response.data
  }

  async getAccount() {
    const reponse = await this.api.valorant.v1AccountDetail(this.name, this.tag)
    return reponse.data
  }

  async getMMR() {
    const reponse = await this.api.valorant.v1MmrDetail(this.name, this.tag, this.affinity)
    return reponse.data
  }

  async getMatches() {
    const reponse = await this.api.valorant.v3MatchesDetail(this.name, this.tag, this.affinity)
    return reponse.data
  }
}
