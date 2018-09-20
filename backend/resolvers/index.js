import { Language, Team, Role } from '../db'

const getLanguageIdByLocale = async ({ locale }) => {
  const language = await Language.findOne({ code: locale })
  return language._id
}

export default {
  Query: {
    languages: async () => Language.find({}),
    teams: async () => Team.find({}),
    team: async (root, { where }) => {
      return Team.findOne({
        'translations.locale': await getLanguageIdByLocale(where)
      }, {
        'code': 1,
        'translations.$': 1
      })
    },
    roles: async (root, { where }) => {
      return Role.find({
        'translations.locale': await getLanguageIdByLocale(where)
      }, {
        'code': 1,
        'team': 1,
        'translations.$': 1
      })
    },
    role: async (root, { code, where }) => {
      return Role.findOne({
        code,
        'translations.locale': await getLanguageIdByLocale(where)
      }, {
        'code': 1,
        'team': 1,
        'translations.$': 1
      })
    }
  },
  Role: {
    team: async ({ team }) => Team.findById(team),
    translation: async ({ translations }) => {
      const [translation] = translations
      return translation
    }
  },
  Translation: {
    locale: async ({ locale }) => Language.findById(locale)
  }
}
