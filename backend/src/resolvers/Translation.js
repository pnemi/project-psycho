import * as TranslationService from '../services/TranslationService'

const translationsResolver = async () => TranslationService.getTranslations()

const translationsFieldResolver = {
  value: async (translation, { lang }) => translation[lang],
}

export { translationsResolver, translationsFieldResolver }
