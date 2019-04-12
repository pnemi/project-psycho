import {
  FETCH_TRANSLATIONS_BEGIN,
  FETCH_TRANSLATIONS_FAILURE,
  FETCH_TRANSLATIONS_SUCCESS,
} from './translationsActions'

export const initialState = {
  data: {},
}

export const reducers = {
  [FETCH_TRANSLATIONS_BEGIN]: (state, action) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [FETCH_TRANSLATIONS_SUCCESS]: (state, { payload }) => ({
    ...state,
    loading: false,
    data: payload.data,
  }),
  [FETCH_TRANSLATIONS_FAILURE]: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload.error,
    data: [],
  }),
}

export default (state = initialState, action) =>
  reducers.hasOwnProperty(action.type)
    ? reducers[action.type](state, action)
    : state
