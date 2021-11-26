# list-all-repos-langs.js
This is JavaScript API to get list of languages used in your public repositories.
This is based on [GitHub REST API](https://docs.github.com/en/rest).

## Usage
You can use this API in your code as following.
You need to get a personal access token in advance.
```js
const langDict = await listAllReposLangs(userName: string, token: string)
```

Function `listAllReposLangs()` returns Object in which pairs of language and the number of bytes of code written in it are stored.
For example:
```js
{
  "JavaScript": 2000,
  "HTML": 500,
  "CSS": 1000
}
```
