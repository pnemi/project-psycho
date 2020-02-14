import * as RoleService from '../services/RoleService'
import * as TeamService from '../services/TeamService'

const rolesResolver = () => RoleService.getRoles()

const rolesFieldResolver = {
  team: async (role) => {
    const team = await TeamService.getTeamById(role.team)
    // @ts-ignore
    return team.code
  },
}

export { rolesResolver, rolesFieldResolver }
