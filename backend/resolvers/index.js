import { roleResolver, rolesResolver } from './Role'
import { teamResolver, teamsResolver } from './Team'
import { languagesResolver } from './Language'

export default {
  Query: {

    role: roleResolver,
    roles: rolesResolver,

    team: teamResolver,
    teams: teamsResolver,

    languages: languagesResolver
  }
}
