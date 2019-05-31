export const FETCH_TRANSLATIONS_BEGIN = 'FETCH_TRANSLATIONS_BEGIN'
export const FETCH_TRANSLATIONS_SUCCESS = 'FETCH_TRANSLATIONS_SUCCESS'
export const FETCH_TRANSLATIONS_FAILURE = 'FETCH_TRANSLATIONS_FAILURE'

export interface TranslationDictionary {
  [code: string]: string
}

interface FetchTranslationsBeginAction extends StorePayload {
  type: typeof FETCH_TRANSLATIONS_BEGIN
}

interface FetchTranslationsSuccessAction extends StorePayload {
  type: typeof FETCH_TRANSLATIONS_SUCCESS
  payload: {
    data: {
      [language: string]: TranslationDictionary
    }
  }
}

interface FetchTranslationsErrorAction extends StorePayload {
  type: typeof FETCH_TRANSLATIONS_FAILURE
  payload: {
    error: any
  }
}

export type TranslationsActionTypes =
  | FetchTranslationsBeginAction
  | FetchTranslationsSuccessAction
  | FetchTranslationsErrorAction

export const fetchTranslationsBegin = (): TranslationsActionTypes => ({
  type: FETCH_TRANSLATIONS_BEGIN,
})

export const fetchTranslationsSuccess = (
  data: TranslationDictionary,
  lang: string
): TranslationsActionTypes => ({
  type: FETCH_TRANSLATIONS_SUCCESS,
  payload: { data: { [lang]: data } },
})

export const fetchTranslationsError = (
  error: any
): TranslationsActionTypes => ({
  type: FETCH_TRANSLATIONS_FAILURE,
  payload: { error },
})
