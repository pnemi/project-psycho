import * as translationsActions from '@store/translations/translationsActions'

import { map, mergeMap } from 'rxjs/operators'

import { fetchTranslations } from '@services/translationService'
import { from } from 'rxjs'
import { ofType } from 'redux-observable'

const unwrapTranslations = ({ data }) => data.translations

export const fetchTranslationsEpic = (action$, state$) =>
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
        )
      )
    )
  )
