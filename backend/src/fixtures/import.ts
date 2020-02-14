/* eslint-disable no-console */
import { Language, Preset, Role, Team, Translation } from '../db'

import appTranslations from './data/translations-app.json'
import languages from './data/languages.json'
import presets from './data/presets.json'
import presetsTranslations from './data/translations-presets.json'
import roles from './data/roles.json'
import rolesTranslations from './data/translations-roles.json'
import teams from './data/teams.json'
import teamsTranslations from './data/translations-teams.json'

const teamDocs = {}
const roleDocs = {}

async function importLanguages() {
  await Language.deleteMany({})

  return Promise.all(
    languages.map((language) => {
      const langDoc = new Language(language)
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
      const teamDoc = new Team(team)
      // @ts-ignore
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
        // @ts-ignore
        team: teamDocs[role.team],
      })
      // @ts-ignore
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
        ...preset,
        // @ts-ignore
        roles: preset.roles.map((role) => roleDocs[role]),
      })
      return presetDoc
        .save()
        .then(() => console.log(`Preset ${preset.code} saved`))
        .catch((err) => console.log(err))
    })
  )
}

async function importTranslations() {
  await Translation.deleteMany({})

  const translations = [
    ...presetsTranslations,
    ...teamsTranslations,
    ...rolesTranslations,
    ...appTranslations,
  ]

  return Promise.all(
    translations.map((translation) => {
      const translationDoc = new Translation(translation)
      return translationDoc
        .save()
        .then(() => console.log(`Translations ${translation.code} saved`))
        .catch((err) => console.log(err))
    })
  )
}

async function importAll() {
  await importLanguages()
  await importTeams()
  await importRoles()
  await importPresets()
  await importTranslations()
}

;(async () => {
  await importAll()
  process.exit()
})()
