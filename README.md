![NPM](https://img.shields.io/npm/l/foremjs?style=for-the-badge) ![API COVERAGE](https://img.shields.io/badge/api%20coverage-59%25-cfff00?style=for-the-badge) ![npm](https://img.shields.io/npm/v/foremjs?style=for-the-badge) ![Codacy grade](https://img.shields.io/codacy/grade/b970ffc3edcc4b84b1330fdc951c851e?style=for-the-badge) ![GitHub issues](https://img.shields.io/github/issues-raw/foremjs/foremjs?style=for-the-badge) ![npm bundle size](https://img.shields.io/bundlephobia/min/foremjs?style=for-the-badge) 

# ForemJS

ForemJS is an API wrapper for the [Forem API](https://docs.forem.com/api/) which empowers [dev.to](https://dev.to). This wrapper currently allows you to get articles, users, and comments, and post your own articles. Currently, the API only covers about 20% of the API, however by v1.0.0, the API will cover the entire API.

## Installation

Use [NPM](https://npm.im/foremjs) to download ForemJS.

```bash
npm install foremjs --save
```

## Usage

```javascript
const Forem = require('foremjs')
const client = new Forem.Client(YOUR_TOKEN_HERE);

(async () => {
  const article = await client.getArticle('danielnewell/introducing-foremjs-the-api-wrapper-for-dev-to-5amo')
  console.log(article.tag) // ['node', 'forem', 'javascript', 'opensource']
  const user = await client.getUser(1)
  console.log(user.name) // Ben Halpern
})()
```

You can get a token on your Dev.to [account settings page](https://dev.to/settings/account). This wrapper runs asynchronously, so you can use an anonymous function to run your code easily. A full documentation is being worked on.

## Contributing
We are always looking for people help with this project. Create an issue and once we approve it, you can start working on it. Or you can make a suggestion and somebody else can add it for you.

## License
[MIT](https://choosealicense.com/licenses/mit/)