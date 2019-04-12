import { Language } from '../db'

export const getLanguages = async () => Language.find()
