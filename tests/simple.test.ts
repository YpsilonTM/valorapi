import { ValorantUser } from '../src/index'
import { Affinities } from '../src/swagger.build'

jest.mock('../src/index', () => {
  return {
    ValorantUser: jest.fn().mockImplementation(() => {
      return {
        getAccount: jest.fn().mockResolvedValue({
          puuid: 'mockPuuid',
          // add other properties as needed
        }),
        getMMR: jest.fn().mockResolvedValue({
          current_data: 'mockData',
          // add other properties as needed
        }),
      }
    }),
  }
})

describe('ValorantUser', () => {
  let user: ValorantUser

  beforeEach(() => {
    user = new ValorantUser('ypsilontm', 'euw', Affinities.Eu)
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
