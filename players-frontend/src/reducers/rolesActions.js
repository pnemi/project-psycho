export const ADD_ROLE = 'ADD_ROLE'
export const REMOVE_ROLE = 'REMOVE_ROLE'

export const addRole = (role) => {
  return { type: ADD_ROLE, role }
}

export const removeRole = (index) => {
  return { type: REMOVE_ROLE, index }
}
