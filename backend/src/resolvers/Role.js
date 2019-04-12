import * as RoleService from '../services/RoleService'

const rolesResolver = async () => RoleService.getRoles()

export { rolesResolver }
