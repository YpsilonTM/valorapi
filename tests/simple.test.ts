import { ValorantUser } from '../src/index'

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
    user = new ValorantUser('ypsilontm', 'euw', 'eu')
  })

  test('getAccount returns account data', async () => {
    const data = await user.getAccount()
    expect(data).toBeDefined()
    expect(data).toHaveProperty('puuid')
    expect(data?.puuid).toBe('mockPuuid')
  })

  test('getMMR returns mmr data', async () => {
    const data = await user.getMMR()
    expect(data).toBeDefined()
    expect(data).toHaveProperty('current_data')
    expect(data?.current_data).toBe('mockData')
  })
})
