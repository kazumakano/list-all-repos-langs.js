import { Octokit } from "@octokit/core"


interface LangDict {
  [name: string]: number
}

export default async function listAllReposLangs(userName: string, token: string): Promise<LangDict> {
  const octokit = new Octokit({auth: token})

  const repos = await octokit.request("GET /users/{username}/repos", {
    username: userName
  })    // get public repositories list

  let langDict: LangDict = {}
  for (let r of repos.data) {
    const langs = await octokit.request("GET /repos/{owner}/{repo}/languages", {
      owner: userName,
      repo: r.name
    })    // get languages list

    for (let l in langs.data) {
      if (l in langDict) {
        langDict[l] += langs.data[l]
      }
      else {
        langDict[l] = langs.data[l]
      }
    }
  }

  return langDict
}
