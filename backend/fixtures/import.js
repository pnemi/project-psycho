import teams from './data/teams'
import languages from './data/languages'
import roles from './data/roles'
import { Team, Language, Role } from '../db'

const langDocs = {}
const teamDocs = {}

async function importLanguages () {
  await Language.deleteMany({})

  await Promise.all(languages.map(async (language) => {
    const langDoc = new Language(language)
    langDocs[language.code] = langDoc
    await langDoc.save(function (err) {
      if (err) {
        console.log(err)
      } else {
        console.log(`Language ${language.name} saved`)
      }
    })
  }))
}

async function importTeams () {
  await Team.deleteMany({})

  await Promise.all(teams.map(async (team) => {
    const teamDoc = new Team({
      code: team.code,
      translations: Object.keys(langDocs).map((lang) => ({
        locale: langDocs[lang],
        name: team.translations[lang].name,
        description: team.translations[lang].description
      }))
    })
    teamDocs[team.code] = teamDoc
    await teamDoc.save(function (err) {
      if (err) {
        console.log(`Team ${team.code} error: `, err)
      } else {
        console.log(`Team ${team.code} saved`)
      }
    })
  }))
}

async function importRoles () {
  await Role.deleteMany({})

  await Promise.all(roles.map(async (role) => {
    const roleDoc = new Role({
      code: role.code,
      team: teamDocs[role.team],
      translations: Object.keys(langDocs).map((lang) => ({
        locale: langDocs[lang],
        name: role.translations[lang].name,
        description: role.translations[lang].description
      }))
    })
    await roleDoc.save(function (err) {
      if (err) {
        console.log(err)
      } else {
        console.log(`Role ${role.code} saved`)
      }
    })
  }))
}

async function importAll () {
  await importLanguages()
  await importTeams()
  await importRoles()
}

importAll()
