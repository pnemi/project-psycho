import { randArrayItem, shuffle } from '@psycho/utils/utils'

export const getRequiredNumberOfPlayers = (roles) =>
  roles.reduce(
    (numberOfPlayers, role) =>
      Number(role.checked && !role.assignedDuringGame && !role.complement) +
      numberOfPlayers,
    0
  )

export const filterDistributableRoles = (roles) =>
  roles.filter(
    (role) => role.checked && !role.assignedDuringGame && !role.complement
  )

export const filterListRoles = (roles) =>
  roles
    .filter((role) => !role.complement)
    .sort((prevRole, currRole) => prevRole.order - currRole.order)
    .sort((prevRole, currRole) => prevRole.required - currRole.required)

export const filterComplementRoles = (roles) =>
  roles.filter((role) => role.complement)

export const getRolesDistributionPool = (
  numberOfPlayers,
  selectedRoles,
  complementRoles
) =>
  shuffle([
    ...selectedRoles,
    ...Array.from({ length: numberOfPlayers - selectedRoles.length }).map(() =>
      randArrayItem(complementRoles)
    ),
  ])
