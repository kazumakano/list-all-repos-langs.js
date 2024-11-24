# list-all-repos-langs.js
This JavaScript API lets you obtain lists of languages used in your public repositories.
It accesses the information through [GitHub REST API](https://docs.github.com/rest).

## Usage
You can readily adopt this API in your codes as below.
It returns an object that stores pairs of the language name and number of bytes of codes.
```js
const langDict = await listAllReposLangs("your user name")
```

GitHub limits the number of requests within a specific time.
You can set your personal access token to ease the limitation.
Request management by passing abort signals may also be helpful for clean-up processes.
```js
const abortCtrler = new AbortController()
const langDict = await listAllReposLangs("your user name", "your access token", abortCtrler.signal)
```

## Examples
```sh
> await listAllReposLangs("foo")
{ JavaScript: 2000, HTML: 500, CSS: 1000 }
```
