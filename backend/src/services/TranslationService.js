import { Translation } from '../db'

export const getTranslations = async () => Translation.find()
