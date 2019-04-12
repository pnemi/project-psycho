import * as appEpics from './app'
import * as langEpics from './lang'
import * as rolesEpics from './roles'
import * as translationsEpics from './translations'

import { combineEpics } from 'redux-observable'

const epics = [
  ...Object.values(rolesEpics),
  ...Object.values(langEpics),
  ...Object.values(appEpics),
  ...Object.values(translationsEpics),
]

export default combineEpics(...epics)
