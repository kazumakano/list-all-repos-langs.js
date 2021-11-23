# list-all-repos-langs.js
This is API to get the list of languages in your public repositories.
This is based on [GitHub REST API](https://docs.github.com/en/rest).

## Usage
You can use this API in your JavaScript (TypeScript) code as following.
You need to get a access token in advance.
```js
const langDict = await listAllReposLangs(userName: string, token: string)
```

Function `listAllReposLangs()` returns Object in which pairs of language and the number of bytes of code written in it is stored.
For example:
```js
{
  "JavaScript": 2000,
  "HTML": 500,
  "CSS": 1000
}
```
