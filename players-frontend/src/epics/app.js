import * as appActions from '@psycho/store/app/appActions'
import * as langActions from '@psycho/store/lang/langActions'
import * as rolesActions from '@psycho/store/roles/rolesActions'
import * as teamsActions from '@psycho/store/teams/teamsActions'
import * as translationsActions from '@psycho/store/translations/translationsActions'

import { flatMap, mapTo, take } from 'rxjs/operators'

import { ofType } from 'redux-observable'
import { zip } from 'rxjs'

export const appInitEpic = (action$) =>
  action$.pipe(
    ofType(appActions.APP_INIT_BEGIN),
    flatMap(() => [
      langActions.fetchLangsBegin(),
      translationsActions.fetchTranslationsBegin(),
      rolesActions.fetchRolesBegin(),
      teamsActions.fetchTeamsBegin(),
    ])
  )

export const appInitSuccessEpic = (action$) =>
  zip(
    action$.pipe(ofType(langActions.FETCH_LANGS_SUCCESS)),
    action$.pipe(ofType(rolesActions.FETCH_ROLES_SUCCESS)),
    action$.pipe(ofType(teamsActions.FETCH_TEAMS_SUCCESS)),
    action$.pipe(ofType(translationsActions.FETCH_TRANSLATIONS_SUCCESS))
  ).pipe(
    take(1),
    mapTo(appActions.appInitSuccess())
  )
