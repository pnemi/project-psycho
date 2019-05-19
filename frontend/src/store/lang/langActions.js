export const FETCH_LANGS_BEGIN = 'FETCH_LANGS_BEGIN'
export const FETCH_LANGS_SUCCESS = 'FETCH_LANGS_SUCCESS'
export const FETCH_LANGS_FAILURE = 'FETCH_LANGS_FAILURE'
export const SWITCH_LANG = 'SWITCH_LANG'

export const fetchLangsBegin = () => ({
  type: FETCH_LANGS_BEGIN,
})

export const fetchLangsSuccess = (data) => ({
  type: FETCH_LANGS_SUCCESS,
  payload: { data },
})

export const fetchLangsError = (error) => ({
  type: FETCH_LANGS_FAILURE,
  payload: { error },
})

export const switchLang = (lang) => ({
  type: SWITCH_LANG,
  payload: { lang },
})
