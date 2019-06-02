import { randArrayItem, shuffle } from '@psycho/utils/utils'
/**
 * Returns number of players required to start a game.
 */
export const getRequiredNumberOfPlayers = (roles: Array<Role>): number =>
  filterSelectedRoles(roles).length

/**
 * Returns list of visibly selected roles.
 */
export const filterSelectedRoles = (roles: Array<Role>): Array<Role> =>
  roles.filter(
    (role: Role) =>
      role.required ||
      (role.checked && !role.distributedDuringGame && !role.complement)
  )

/**
 * Returns list of complement roles.
 */
export const filterComplementRoles = (roles: Array<Role>): Array<Role> =>
  roles.filter((role: Role) => role.complement)

/**
 * Returns sorted list of all visibly selectable roles.
 */
export const getSortedRolesList = (roles: Array<Role>): Array<Role> =>
  roles
    .filter((role: Role) => !role.complement)
    .sort((prevRole: Role, currRole: Role) => prevRole.order - currRole.order)
    .sort(
      (prevRole: Role, currRole: Role) =>
        Number(prevRole.required) - Number(currRole.required)
    )

/**
 * Returns merged list of selected and complement roles.
 */
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
