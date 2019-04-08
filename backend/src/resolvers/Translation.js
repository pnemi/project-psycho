import { Translation } from '../db'

const translationsResolver = async () => Translation.find({})

const translationsFieldResolver = {
  value: async (translation, { lang }) => translation[lang],
}

export { translationsResolver, translationsFieldResolver }
