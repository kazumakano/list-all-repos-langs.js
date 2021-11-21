import listAllReposLangs from "./list-all-repos-langs"

const USER_NAME = "your user name"
const TOKEN = "your access token"

main()

async function main(): Promise<void> {
  const langDict = await listAllReposLangs(USER_NAME, TOKEN)

  console.table(langDict)
}
