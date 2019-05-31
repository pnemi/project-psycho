import * as translationsActions from '@psycho/store/translations/translationsActions'

import { ActionsObservable, StateObservable, ofType } from 'redux-observable'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { from, of } from 'rxjs'

import { StoreState } from '@psycho/store'
import { fetchTranslations } from '@psycho/services/translationService'

const unwrapTranslations = ({
  data,
}: {
  data: { translations: Array<Translation> }
}) => data.translations

export const fetchTranslationsEpic = (
  action$: ActionsObservable<translationsActions.TranslationsActionTypes>,
  state$: StateObservable<StoreState>
) =>
  action$.pipe(
    ofType(translationsActions.FETCH_TRANSLATIONS_BEGIN),
    mergeMap(() =>
      from(fetchTranslations(state$.value.lang.currentLang)).pipe(
        map(unwrapTranslations),
        map((translations) =>
          translations.reduce(
            (acc, t) => ({
              ...acc,
              [t.code]: t.value,
            }),
            {}
          )
        ),
        map((translations) =>
          translationsActions.fetchTranslationsSuccess(
            translations,
            state$.value.lang.currentLang
          )
        ),
        catchError((error) =>
          of(translationsActions.fetchTranslationsError(error))
        )
      )
    )
  )
