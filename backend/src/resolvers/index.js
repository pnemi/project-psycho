import { translationsFieldResolver, translationsResolver } from './Translation'

import { languagesResolver } from './Language'
import { presetsResolver } from './Preset'
import { rolesResolver } from './Role'
import { teamsResolver } from './Team'

export default {
  Query: {
    roles: rolesResolver,
    teams: teamsResolver,
    presets: presetsResolver,
    languages: languagesResolver,
    translations: translationsResolver,
  },
  Translation: translationsFieldResolver,
}
