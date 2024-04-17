import { ValorantUser } from '../src/index'

describe('ValorantUser', () => {
  let user: ValorantUser

  beforeEach(() => {
    user = new ValorantUser('ypsilontm', 'euw', 'eu')
  })

  test('getAccount returns account data', async () => {
    const data = await user.getAccount()
    expect(data).toBeDefined()
    expect(data).toHaveProperty('puuid')
  })

  test('getMMR returns mmr data', async () => {
    const data = await user.getMMR()
    expect(data).toBeDefined()
    expect(data).toHaveProperty('current_data')
  })
})
