import { ValorantUser } from '../src/index'
import { Affinities } from '../src/swagger.build'

describe('ValorantUser', () => {
  let user: ValorantUser

  beforeEach(() => {
    user = new ValorantUser('ypsilontm', 'euw', Affinities.Eu)
  })

  test('getAccount returns account data', async () => {
    const response = await user.getAccount()
    expect(response).toBeDefined()
    expect(response.status).toBe(200)
    expect(response).toHaveProperty('data.puuid')
  })

  test('getMMR returns mmr data', async () => {
    const response = await user.getMMR()
    expect(response).toBeDefined()
    expect(response.status).toBe(200)
    expect(response).toHaveProperty('data.currenttier')
  })

  test('getMatches returns match data', async () => {
    const response = await user.getMatches()
    expect(response).toBeDefined()
    expect(response.status).toBe(200)
  })

  test('getContent returns content data', async () => {
    const response = await user.getContent({ locale: 'en-GB' })
    expect(response).toBeDefined()
  })
})
