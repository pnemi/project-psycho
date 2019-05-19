import {
  FETCH_LANGS_BEGIN,
  FETCH_LANGS_FAILURE,
  FETCH_LANGS_SUCCESS,
  SWITCH_LANG,
} from './langActions'

import { load } from '@psycho/utils/storage'

export const initialState = {
  data: [],
  loading: false,
  error: null,
  currentLang: load('currentLang', 'cs'),
}

export const reducers = {
  [FETCH_LANGS_BEGIN]: (state, action) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [FETCH_LANGS_SUCCESS]: (state, { payload }) => ({
    ...state,
    loading: false,
    data: payload.data,
  }),
  [FETCH_LANGS_FAILURE]: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload.error,
    data: [],
  }),
  [SWITCH_LANG]: (state, { payload }) => ({
    ...state,
    currentLang: payload.lang,
  }),
}

export default (state = initialState, action) =>
  reducers.hasOwnProperty(action.type)
    ? reducers[action.type](state, action)
    : state
