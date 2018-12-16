import { combineEpics } from 'redux-observable'
import * as rolesEpics from './roles'
import * as langEpics from './lang'

const epics = [...Object.values(rolesEpics), ...Object.values(langEpics)]

export default combineEpics(...epics)
