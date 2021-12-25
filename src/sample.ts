import listAllReposLangs from "./list-all-repos-langs"

const USER_NAME = "your user name"
const TOKEN = "your access token"

const sample = async () => {
  console.table(await listAllReposLangs(USER_NAME, TOKEN))
}

sample()
