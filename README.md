# ValorAPI

## Info

This is a wrapper for the [Valorant API](https://github.com/Henrik-3/unofficial-valorant-api) ran by [Hendrik](https://github.com/Henrik-3).

You do not need an API key to use this wrapper, it is rate limited to 30 requests per minute.

I have created this wrapper to have easy access to valorant api. I will be adding more endpoints as I go. But for now, I have only added the basic endpoints.

For big scale projects, I would recommend using the [official API](https://developer.riotgames.com/docs/valorant) by Riot Games.

## Contributing

If you would like to contribute to this project, please feel free to do so. I will be happy to accept any pull requests after reviewing them. If you have any suggestions or issues, please open an issue.

## Usage

CommonJS:

```js
const ValorAPI = require('valorapi')
const User = new ValorAPI('username', 'tag', 'region')
const account = await User.getAccount()
```

ES6:

```js
import ValorAPI from 'valorapi'
const User = new ValorAPI('username', 'tag', 'region')
const account = await User.getAccount()
```

## Todo

- [ ] Add more endpoints
- [ ] Optimize code
- [ ] Add better error handling
- [ ] Add more tests
- [ ] Add more documentation
