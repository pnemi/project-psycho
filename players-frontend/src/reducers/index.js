import { combineReducers } from 'redux'
import roles from './roles/rolesReducer'
import lang from './lang/langReducer'

const reducers = combineReducers({
  roles,
  lang,
})

export default reducers
