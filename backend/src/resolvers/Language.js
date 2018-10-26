import { Language } from '../db'

const languagesResolver = async () => Language.find({})

export {
  languagesResolver
}
