import * as langActions from '@psycho/store/lang/langActions'
import * as translationsActions from '@psycho/store/translations/translationsActions'

import { ActionsObservable, Epic, ofType } from 'redux-observable'
import { catchError, map, mapTo, mergeMap, tap } from 'rxjs/operators'
import { from, of } from 'rxjs'

import { StoreState } from '@psycho/store'
import { fetchLanguages } from '@psycho/services/languageService'
import { setupIntl } from '@psycho/utils/language'

const unwrapLanguages = ({ data }: { data: { languages: Array<Language> } }) =>
  data.languages

// TODO: Change lang after successful fetch
export const fetchLangsEpic: Epic<
  langActions.LanguagesActionTypes,
  langActions.LanguagesActionTypes,
  StoreState
> = (action$: ActionsObservable<langActions.LanguagesActionTypes>) =>
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
export const switchLangEpic = (
  action$: ActionsObservable<langActions.LanguagesActionTypes>
) =>
  action$.pipe(
    ofType(langActions.SWITCH_LANG),
    mapTo(translationsActions.fetchTranslationsBegin())
  )
