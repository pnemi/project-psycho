import gql from "graphql-tag"

export const FETCH_ROLES_BEGIN = 'FETCH_ROLES_BEGIN'
export const FETCH_ROLES_SUCCESS = 'FETCH_ROLES_SUCCESS'
export const FETCH_ROLES_FAILURE = 'FETCH_ROLES_FAILURE'

export const fetchRolesBegin = () => ({
  type: FETCH_ROLES_BEGIN
});

export const fetchRolesSuccess = (data) => ({
  type: FETCH_ROLES_SUCCESS,
  payload: { data }
});

export const fetchRolesError = (error) => ({
  type: FETCH_ROLES_FAILURE,
  payload: { error }
});


export const fetchRoles = (client) => {
  return dispatch => {
    dispatch(fetchRolesBegin())
    client
      .query({
        query: gql`
        {
          roles(lang: {code: "cs"}) {
            code,
            name,
            description
          }
        }
        `
      })
      .then(({ data }) => dispatch(fetchRolesSuccess(data.roles)))
      .catch(err => dispatch(fetchRolesError(err)))
  }
}
