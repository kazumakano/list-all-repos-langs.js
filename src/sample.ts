import listAllReposLangs from "./list-all-repos-langs"

const USER_NAME = "your user name"
const TOKEN = "your access token"

listAllReposLangs(USER_NAME, TOKEN).then(d => console.table(d))
