export const getRequiredNumberOfPlayers = (roles) =>
  roles.reduce(
    (numberOfPlayers, role) =>
      Number(role.checked && !role.assignedDuringGame && !role.complement) +
      numberOfPlayers,
    0
  )
