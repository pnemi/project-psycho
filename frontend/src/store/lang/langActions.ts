export const FETCH_LANGS_BEGIN = 'FETCH_LANGS_BEGIN'
export const FETCH_LANGS_SUCCESS = 'FETCH_LANGS_SUCCESS'
export const FETCH_LANGS_FAILURE = 'FETCH_LANGS_FAILURE'
export const SWITCH_LANG = 'SWITCH_LANG'

interface FetchLanguagesBeginAction extends StorePayload {
  type: typeof FETCH_LANGS_BEGIN
}

interface FetchLanguagesSuccessAction extends StorePayload {
  type: typeof FETCH_LANGS_SUCCESS
  payload: {
    data: Array<Language>
  }
}

interface FetchLanguagesErrorAction extends StorePayload {
  type: typeof FETCH_LANGS_FAILURE
  payload: {
    error: any
  }
}

interface SwitchLanguageAction extends StorePayload {
  type: typeof SWITCH_LANG
  payload: {
    lang: string
  }
}

export type LanguagesActionTypes =
  | FetchLanguagesBeginAction
  | FetchLanguagesSuccessAction
  | FetchLanguagesErrorAction
  | SwitchLanguageAction

export const fetchLangsBegin = (): LanguagesActionTypes => ({
  type: FETCH_LANGS_BEGIN,
})

export const fetchLangsSuccess = (
  data: Array<Language>
): LanguagesActionTypes => ({
  type: FETCH_LANGS_SUCCESS,
  payload: { data },
})

export const fetchLangsError = (error: any): LanguagesActionTypes => ({
  type: FETCH_LANGS_FAILURE,
  payload: { error },
})

export const switchLang = (lang: string): LanguagesActionTypes => ({
  type: SWITCH_LANG,
  payload: { lang },
})
