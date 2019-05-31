import {
  FETCH_LANGS_BEGIN,
  FETCH_LANGS_FAILURE,
  FETCH_LANGS_SUCCESS,
  LanguagesActionTypes,
  SWITCH_LANG,
} from './langActions'

import { load } from '@psycho/utils/storage'

interface LanguageState extends FetchableState {
  data: Array<Language>
  currentLang: string
}

const initialState: LanguageState = {
  data: [],
  loading: false,
  error: null,
  currentLang: load('currentLang', 'cs'),
}

const reducers = {
  [FETCH_LANGS_BEGIN]: (state: LanguageState): LanguageState => ({
    ...state,
    loading: true,
    error: null,
  }),
  [FETCH_LANGS_SUCCESS]: (
    state: LanguageState,
    action: LanguagesActionTypes
  ): LanguageState => ({
    ...state,
    loading: false,
    data: action.payload.data,
  }),
  [FETCH_LANGS_FAILURE]: (
    state: LanguageState,
    action: LanguagesActionTypes
  ): LanguageState => ({
    ...state,
    loading: false,
    error: action.payload.error,
    data: [],
  }),
  [SWITCH_LANG]: (
    state: LanguageState,
    action: LanguagesActionTypes
  ): LanguageState => ({
    ...state,
    currentLang: action.payload.lang,
  }),
}

export default (
  state: LanguageState = initialState,
  action: LanguagesActionTypes
): LanguageState =>
  reducers.hasOwnProperty(action.type)
    ? reducers[action.type](state, action)
    : state
