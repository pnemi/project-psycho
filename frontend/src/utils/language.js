import { addLocaleData } from 'react-intl'

export const setupIntl = (languages) =>
  languages.forEach((lang) =>
    addLocaleData(require(`react-intl/locale-data/${lang.code}`))
  )
