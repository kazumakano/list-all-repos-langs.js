# list-all-repos-langs.js
This JavaScript API lets you obtain lists of languages used in your public repositories.
This is based on [GitHub REST API](https://docs.github.com/rest).

## Usage
You can readily adopt this API in your codes as below.
```js
const langDict = await listAllReposLangs("your user name")
```
You can also specify your personal access token to ease the limitation.
Request management by passing abort signals may be helpful for clean-up processes.
```js
const abortCtrler = new AbortController()
const langDict = await listAllReposLangs("your user name", "your access token", abortCtrler.signal)
```

The function `listAllReposLangs()` returns an object that stores pairs of language and the number of bytes of codes written in it.
For example:
```sh
> langDict
{ JavaScript: 2000, HTML: 500, CSS: 1000 }
```
