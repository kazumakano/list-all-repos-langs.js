import listAllReposLangs from "./list-all-repos-langs"

const USERNAME = "your user name"
const TOKEN = "your access token"

main()

async function main(): Promise<void> {
  const langDict = await listAllReposLangs(USERNAME, TOKEN)

  console.table(langDict)
}
