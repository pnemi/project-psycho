export const FETCH_TEAMS_BEGIN = 'FETCH_TEAMS_BEGIN'
export const FETCH_TEAMS_SUCCESS = 'FETCH_TEAMS_SUCCESS'
export const FETCH_TEAMS_FAILURE = 'FETCH_TEAMS_FAILURE'

export interface TeamDictionary {
  [code: string]: Team
}

interface FetchTeamsBeginAction extends StorePayload {
  type: typeof FETCH_TEAMS_BEGIN
}

interface FetchTeamsSuccessAction extends StorePayload {
  type: typeof FETCH_TEAMS_SUCCESS
  payload: {
    data: TeamDictionary
  }
}

interface FetchTeamsErrorAction extends StorePayload {
  type: typeof FETCH_TEAMS_FAILURE
  payload: {
    error: any
  }
}

export type TeamsActionTypes =
  | FetchTeamsBeginAction
  | FetchTeamsSuccessAction
  | FetchTeamsErrorAction

export const fetchTeamsBegin = (): TeamsActionTypes => ({
  type: FETCH_TEAMS_BEGIN,
})

export const fetchTeamsSuccess = (data: TeamDictionary): TeamsActionTypes => ({
  type: FETCH_TEAMS_SUCCESS,
  payload: { data },
})

export const fetchTeamsError = (error: any): TeamsActionTypes => ({
  type: FETCH_TEAMS_FAILURE,
  payload: { error },
})
