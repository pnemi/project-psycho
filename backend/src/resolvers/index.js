import { roleResolver, rolesResolver } from './Role'
import { teamResolver, teamsResolver } from './Team'
import { translationsFieldResolver, translationsResolver } from './Translation'

import { languagesResolver } from './Language'
import { presetsResolver } from './Preset'

export default {
  Query: {
    role: roleResolver,
    roles: rolesResolver,
    team: teamResolver,
    teams: teamsResolver,
    presets: presetsResolver,
    languages: languagesResolver,
    translations: translationsResolver,
  },
  Translation: translationsFieldResolver,
}
