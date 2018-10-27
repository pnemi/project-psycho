import teams from './data/teams'
import languages from './data/languages'
import roles from './data/roles'
import presets from './data/presets'
import { Team, Language, Role, Preset } from '../db'

const langDocs = {}
const teamDocs = {}
const roleDocs = {}

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
      ...role,
      team: teamDocs[role.team],
      translations: Object.keys(langDocs).map((lang) => ({
        locale: langDocs[lang],
        name: role.translations[lang].name,
        description: role.translations[lang].description
      }))
    })
    roleDocs[role.code] = roleDoc
    await roleDoc.save(function (err) {
      if (err) {
        console.log(err)
      } else {
        console.log(`Role ${role.code} saved`)
      }
    })
  }))
}

async function importPresets () {
  await Preset.deleteMany({})

  await Promise.all(presets.map(async (preset) => {
    const presetDoc = new Preset({
      name: preset.name,
      roles: preset.roles.map((role) => roleDocs[role])
    })
    await presetDoc.save(function (err) {
      if (err) {
        console.log(err)
      } else {
        console.log(`Preset ${preset.name} saved`)
      }
    })
  }))
}

async function importAll () {
  await importLanguages()
  await importTeams()
  await importRoles()
  // await importPresets()
}

importAll()
