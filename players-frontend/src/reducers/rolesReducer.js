import { ADD_ROLE, REMOVE_ROLE } from './roleActions'

const initialState = {
  roles: [{
    code: 'init'
  }]
}

const rolesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROLE:
      return [
        ...state,
        {
          code: action.code
        }
      ]
    case REMOVE_ROLE:
      return state.roles.filter((role) => role.code !== action.code)
    default:
      return state
  }
}

export default rolesReducer
