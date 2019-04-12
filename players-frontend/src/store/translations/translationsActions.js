export const FETCH_TRANSLATIONS_BEGIN = 'FETCH_TRANSLATIONS_BEGIN'
export const FETCH_TRANSLATIONS_SUCCESS = 'FETCH_TRANSLATIONS_SUCCESS'
export const FETCH_TRANSLATIONS_FAILURE = 'FETCH_TRANSLATIONS_FAILURE'

export const fetchTranslationsBegin = () => ({
  type: FETCH_TRANSLATIONS_BEGIN,
})

export const fetchTranslationsSuccess = (data, lang) => ({
  type: FETCH_TRANSLATIONS_SUCCESS,
  payload: { data: { [lang]: data } },
})

export const fetchTranslationsError = (error) => ({
  type: FETCH_TRANSLATIONS_FAILURE,
  payload: { error },
})
