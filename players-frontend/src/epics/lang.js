import * as langActions from '@psycho/store/lang/langActions'
import * as translationsActions from '@psycho/store/translations/translationsActions'

import { catchError, map, mapTo, mergeMap, tap } from 'rxjs/operators'
import { from, of } from 'rxjs'

import { fetchLanguages } from '@psycho/services/languageService'
import { ofType } from 'redux-observable'
import { setupIntl } from '@psycho/utils/language'

const unwrapLanguages = ({ data }) => data.languages

// TODO: Change lang after successful fetch
export const fetchLangsEpic = (action$) =>
  action$.pipe(
    ofType(langActions.FETCH_LANGS_BEGIN),
    mergeMap(() =>
      from(fetchLanguages()).pipe(
        map(unwrapLanguages),
        tap((languages) => setupIntl(languages)),
        map((languages) => langActions.fetchLangsSuccess(languages)),
        catchError((error) => of(langActions.fetchLangsError(error)))
      )
    )
  )

// TODO: If translations are locally don't fetch, just switch
export const switchLangEpic = (action$) =>
  action$.pipe(
    ofType(langActions.SWITCH_LANG),
    mapTo(translationsActions.fetchTranslationsBegin())
  )
