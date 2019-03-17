export const CHANGE_NUMBER_OF_PLAYERS = 'CHANGE_NUMBER_OF_PLAYERS'

export const changeNumberOfPlayers = (numberOfPlayers) => ({
  type: CHANGE_NUMBER_OF_PLAYERS,
  payload: { numberOfPlayers },
})
