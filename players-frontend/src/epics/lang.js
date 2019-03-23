import * as langActions from '@store/lang/langActions'
import * as rolesActions from '@store/roles/rolesActions'

import { map, mapTo, mergeMap } from 'rxjs/operators'

import { from } from 'rxjs'
import gql from 'graphql-tag'
import { gqlQuery } from '../gql-client'
import { ofType } from 'redux-observable'

const LANGUAGES_QUERY = gql`
  query Languages {
    languages {
      name
      code
    }
  }
`

const unwrapLanguages = ({ data }) => data.languages

export const fetchLangsEpic = (action$, state$) =>
  action$.pipe(
    ofType(langActions.FETCH_LANGS_BEGIN),
    mergeMap(() =>
      from(gqlQuery(LANGUAGES_QUERY)).pipe(
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
