import * as langActions from '@store/lang/langActions'
import * as rolesActions from '@store/roles/rolesActions'

import { map, mapTo, mergeMap } from 'rxjs/operators'

import { fetchLanguages } from '@services/languageService'
import { from } from 'rxjs'
import { ofType } from 'redux-observable'

const unwrapLanguages = ({ data }) => data.languages

export const fetchLangsEpic = (action$) =>
  action$.pipe(
    ofType(langActions.FETCH_LANGS_BEGIN),
    mergeMap(() =>
      from(fetchLanguages()).pipe(
        map(unwrapLanguages),
        map((languages) => langActions.fetchLangsSuccess(languages))
      )
    )
  )

export const switchLangEpic = (action$) =>
  action$.pipe(
    ofType(langActions.SWITCH_LANG),
    mapTo(rolesActions.fetchRolesBegin())
  )
