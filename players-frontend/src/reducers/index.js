import { combineReducers } from 'redux'
import roles from './roles/rolesReducer'

const reducers = combineReducers({
  roles,
})

export default reducers
