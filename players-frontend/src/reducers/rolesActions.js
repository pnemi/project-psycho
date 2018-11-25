import gql from 'graphql-tag'
import { save } from '../utils/storage'

export const FETCH_ROLES_BEGIN = 'FETCH_ROLES_BEGIN'
export const FETCH_ROLES_SUCCESS = 'FETCH_ROLES_SUCCESS'
export const FETCH_ROLES_FAILURE = 'FETCH_ROLES_FAILURE'

export const TOGGLE_ROLE = 'TOGGLE_ROLE'

export const fetchRolesBegin = () => ({
  type: FETCH_ROLES_BEGIN,
})

export const fetchRolesSuccess = (data) => ({
  type: FETCH_ROLES_SUCCESS,
  payload: { data },
})

export const fetchRolesError = (error) => ({
  type: FETCH_ROLES_FAILURE,
  payload: { error },
})

export const toggleRole = (code) => {
  return (dispatch, getState) => {
    const { checked } = getState().roles.data.find((role) => role.code === code)
    save(`${code}.checked`, !checked)

    dispatch({
      type: TOGGLE_ROLE,
      payload: { code },
    })
  }
}

export const fetchRoles = (client, onDone) => {
  return (dispatch) => {
    dispatch(fetchRolesBegin())
    client
      .query({
        query: gql`
          {
            roles(lang: { code: "cs" }) {
              order
              code
              name
              description
              required
              listed
              complement
              assignedDuringGame
            }
          }
        `,
      })
      .then(({ data }) => {
        dispatch(fetchRolesSuccess(data.roles))
        if (onDone && typeof onDone === 'function') {
          onDone()
        }
      })
      .catch((err) => dispatch(fetchRolesError(err)))
  }
}
