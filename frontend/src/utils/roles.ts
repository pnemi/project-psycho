import { randArrayItem, shuffle } from '@psycho/utils/utils'

export const getRequiredNumberOfPlayers = (roles: Array<Role>): number =>
  roles.reduce(
    (numberOfPlayers: number, role: Role) =>
      Number(role.checked && !role.distributedDuringGame && !role.complement) +
      numberOfPlayers,
    0
  )

export const filterDistributableRoles = (roles: Array<Role>): Array<Role> =>
  roles.filter(
    (role: Role) =>
      role.checked && !role.distributedDuringGame && !role.complement
  )

export const filterListRoles = (roles: Array<Role>): Array<Role> =>
  roles
    .filter((role: Role) => !role.complement)
    .sort((prevRole: Role, currRole: Role) => prevRole.order - currRole.order)
    .sort(
      (prevRole: Role, currRole: Role) =>
        Number(prevRole.required) - Number(currRole.required)
    )

export const filterComplementRoles = (roles: Array<Role>): Array<Role> =>
  roles.filter((role: Role) => role.complement)

export const getRolesDistributionPool = (
  numberOfPlayers: number,
  selectedRoles: Array<Role>,
  complementRoles: Array<Role>
) =>
  shuffle([
    ...selectedRoles,
    ...Array.from({ length: numberOfPlayers - selectedRoles.length }).map(() =>
      randArrayItem(complementRoles)
    ),
  ])
