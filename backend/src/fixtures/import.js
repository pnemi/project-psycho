/* eslint-disable no-console */
import { Language, Preset, Role, Team } from '../db'

import languages from './data/languages'
import presets from './data/presets'
import roles from './data/roles'
import teams from './data/teams'

const langDocs = {}
const teamDocs = {}
const roleDocs = {}

async function importLanguages() {
  await Language.deleteMany({})

  return Promise.all(
    languages.map((language) => {
      const langDoc = new Language(language)
      langDocs[language.code] = langDoc
      return langDoc
        .save()
        .then(() => console.log(`Language ${language.name} saved`))
        .catch((err) => console.log(err))
    })
  )
}

async function importTeams() {
  await Team.deleteMany({})

  return Promise.all(
    teams.map((team) => {
      const teamDoc = new Team({
        code: team.code,
        translations: Object.keys(langDocs).map((lang) => ({
          locale: langDocs[lang],
          name: team.translations[lang].name,
          description: team.translations[lang].description,
        })),
      })
      teamDocs[team.code] = teamDoc
      return teamDoc
        .save()
        .then(() => console.log(`Team ${team.code} saved`))
        .catch((err) => console.log(`Team ${team.code} error: `, err))
    })
  )
}

async function importRoles() {
  await Role.deleteMany({})

  return Promise.all(
    roles.map((role) => {
      const roleDoc = new Role({
        ...role,
        team: teamDocs[role.team],
        translations: Object.keys(langDocs).map((lang) => ({
          locale: langDocs[lang],
          name: role.translations[lang].name,
          description: role.translations[lang].description,
        })),
      })
      roleDocs[role.code] = roleDoc
      return roleDoc
        .save()
        .then(() => console.log(`Role ${role.code} saved`))
        .catch((err) => console.log(err))
    })
  )
}

async function importPresets() {
  await Preset.deleteMany({})

  return Promise.all(
    presets.map((preset) => {
      const presetDoc = new Preset({
        name: preset.name,
        roles: preset.roles.map((role) => roleDocs[role]),
      })
      return presetDoc
        .save()
        .then(() => console.log(`Preset ${preset.name} saved`))
        .catch((err) => console.log(err))
    })
  )
}

async function importAll() {
  await importLanguages()
  await importTeams()
  await importRoles()
  await importPresets()
}

// eslint-disable-next-line
;(async () => {
  await importAll()
})()
