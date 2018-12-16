import { combineEpics } from 'redux-observable'
import rolesEpic from './roles'

const epics = combineEpics(rolesEpic)

export default epics
