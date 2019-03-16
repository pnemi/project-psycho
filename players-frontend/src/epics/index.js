import * as langEpics from './lang'
import * as rolesEpics from './roles'

import { combineEpics } from 'redux-observable'

const epics = [...Object.values(rolesEpics), ...Object.values(langEpics)]

export default combineEpics(...epics)
