import * as TranslationService from '../services/TranslationService'

const translationsResolver = async () => TranslationService.getTranslations()

const translationsFieldResolver = {
  // @ts-ignore
  value: async (translation, { lang }) => translation[lang],
}

export { translationsResolver, translationsFieldResolver }
