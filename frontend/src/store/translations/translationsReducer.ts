import {
  FETCH_TRANSLATIONS_BEGIN,
  FETCH_TRANSLATIONS_FAILURE,
  FETCH_TRANSLATIONS_SUCCESS,
  TranslationDictionary,
  TranslationsActionTypes,
} from './translationsActions'

export interface TranslationsState extends FetchableState {
  data: {
    [language: string]: TranslationDictionary
  }
}

const initialState: TranslationsState = {
  data: {},
  loading: false,
  error: null,
}

const reducers = {
  [FETCH_TRANSLATIONS_BEGIN]: (
    state: TranslationsState
  ): TranslationsState => ({
    ...state,
    loading: true,
    error: null,
  }),
  [FETCH_TRANSLATIONS_SUCCESS]: (
    state: TranslationsState,
    action: TranslationsActionTypes
  ): TranslationsState => ({
    ...state,
    loading: false,
    data: action.payload.data,
  }),
  [FETCH_TRANSLATIONS_FAILURE]: (
    state: TranslationsState,
    action: TranslationsActionTypes
  ): TranslationsState => ({
    ...state,
    loading: false,
    error: action.payload.error,
    data: {},
  }),
}

export default (
  state: TranslationsState = initialState,
  action: TranslationsActionTypes
): TranslationsState =>
  reducers.hasOwnProperty(action.type)
    ? reducers[action.type](state, action)
    : state
