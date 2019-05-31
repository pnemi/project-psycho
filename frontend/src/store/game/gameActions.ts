export const START_ROLE_DISTRIBUTION = 'START_ROLE_DISTRIBUTION'
export const STOP_ROLE_DISTRIBUTION = 'STOP_ROLE_DISTRIBUTION'

interface StartRoleDistributionAction {
  type: typeof START_ROLE_DISTRIBUTION
}

interface StopRoleDistributionAction {
  type: typeof STOP_ROLE_DISTRIBUTION
}

export type GameActionTypes =
  | StartRoleDistributionAction
  | StopRoleDistributionAction

export const startRoleDistribution = (): GameActionTypes => ({
  type: START_ROLE_DISTRIBUTION,
})

export const stopRoleDistribution = (): GameActionTypes => ({
  type: STOP_ROLE_DISTRIBUTION,
})
