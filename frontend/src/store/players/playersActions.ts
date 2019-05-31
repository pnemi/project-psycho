export const CHANGE_NUMBER_OF_PLAYERS = 'CHANGE_NUMBER_OF_PLAYERS'

interface ChangeNumberOfPlayersAction extends StorePayload {
  type: typeof CHANGE_NUMBER_OF_PLAYERS
  payload: {
    numberOfPlayers: number
  }
}

export type PlayersActionTypes = ChangeNumberOfPlayersAction

export const changeNumberOfPlayers = (
  numberOfPlayers: number
): PlayersActionTypes => ({
  type: CHANGE_NUMBER_OF_PLAYERS,
  payload: { numberOfPlayers },
})
