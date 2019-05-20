import { addLocaleData } from 'react-intl'

export const setupIntl = (languages: Array<Language>): void => {
  languages.forEach((lang) =>
    addLocaleData(require(`react-intl/locale-data/${lang.code}`))
  )
}
