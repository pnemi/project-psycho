import * as LanguageService from '../services/LanguageService'

const languagesResolver = async () => LanguageService.getLanguages()

export { languagesResolver }
