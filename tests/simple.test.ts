import { ValorantUser } from '../src'

const user = new ValorantUser('ypsilontm', 'euw', 'eu')

async function main() {
  const account = await user.getAccount()
  const mmr = await user.getMMR()
  console.log(account, mmr)
}

main()
