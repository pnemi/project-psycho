import { SWITCH_LANG } from './langActions'
import { load } from '@utils/storage'

export const initialState = {
  currentLang: load('currentLang', 'cs'),
}

export const reducers = {
  [SWITCH_LANG]: (state, { payload }) => ({
    ...state,
    currentLang: payload.lang,
  }),
}

export default (state = initialState, action) =>
  reducers.hasOwnProperty(action.type)
    ? reducers[action.type](state, action)
    : state
