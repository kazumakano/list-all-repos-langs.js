import listAllReposLangs from "./list-all-repos-langs"

const USER_NAME = "your user name"
const TOKEN = "your access token"

sample()

async function sample(): Promise<void> {
  const langDict = await listAllReposLangs(USER_NAME, TOKEN)

  console.table(langDict)
}
