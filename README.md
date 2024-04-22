# ValorAPI

## Info

This is a wrapper for the [Valorant API](https://github.com/Henrik-3/unofficial-valorant-api) ran by [Hendrik](https://github.com/Henrik-3).

You do not need an API key to use this wrapper, it is rate limited to 30 requests per minute. Other status codes are also listed in the API documentation.

I have created this wrapper to have easy access to valorant api. I will be adding more endpoints as I go. But for now, I have only added the basic endpoints.

For big scale projects, I would recommend using the [official API](https://developer.riotgames.com/docs/valorant) by Riot Games.

## Api Endpoints

All the endpoints are listed in the API Documentation [here](https://app.swaggerhub.com/apis-docs/Henrik-3/HenrikDev-API)

## Contributing

If you would like to contribute to this project, please feel free to do so. I will be happy to accept any pull requests after reviewing them. If you have any suggestions or issues, please open an issue.

## Beta

This project is still in beta, so there might be some bugs. If you find any, please open an issue. This might take a while until I find it suitable for production. So as long as we don't reach v1 you should consider this as a beta project.
At this stage, even minor updates might break your code. So please be careful when updating.

## Usage

Try to use this wrapper in a try-catch block to catch any errors that might occur. Communication with the API is done via HTTP requests, so there might be some errors that you can catch.
Errors based on the API give an errors object in the response. You can check if the errors object is not null to see if there are any errors.
Some examples are:

- 101: No region found for this Player
- 102: No matches found, can't get puuid
- 103: Possible name change detected, can't get puuid. Please play one match, wait 1-2 minutes and try it again
- 104: Invalid region
- 105: Invalid filter
- 106: Invalid gamemode
- 107: Invalid map
- 108: Invalid locale
- 109: Missing name
- 110: Missing tag
- 111: Player not found in leaderboard

for more errors, please check the API documentation.

CommonJS:

```js
const { ValorantUser } = require('valorapi')
const User = new ValorantUser('ypsilontm', 'euw', Affinities.Eu)
const account = await User.getAccount()
if (account.status === 200) {
  const name = account.data?.name
  // Do other things...
}
```

ES6:

```js
import { ValorantUser } from 'valorapi'
const User = new ValorantUser('ypsilontm', 'euw', Affinities.Eu)
const account = await User.getAccount()
if (account.status === 200) {
  const name = account.data?.name
  // Do other things...
}
```

## Current Available methods

- `getMMR()`
- `getContent()`
- `getMatches()`
- `getMatchesLifetime()`
