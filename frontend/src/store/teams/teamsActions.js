export const FETCH_TEAMS_BEGIN = 'FETCH_TEAMS_BEGIN'
export const FETCH_TEAMS_SUCCESS = 'FETCH_TEAMS_SUCCESS'
export const FETCH_TEAMS_FAILURE = 'FETCH_TEAMS_FAILURE'

export const fetchTeamsBegin = () => ({
  type: FETCH_TEAMS_BEGIN,
})

export const fetchTeamsSuccess = (data) => ({
  type: FETCH_TEAMS_SUCCESS,
  payload: { data },
})

export const fetchTeamsError = (error) => ({
  type: FETCH_TEAMS_FAILURE,
  payload: { error },
})
