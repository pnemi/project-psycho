import * as langActions from '@reducers/lang/langActions'
import * as rolesActions from '@reducers/roles/rolesActions'

import { flatMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'

export const appInitEpic = (action$) =>
  action$.pipe(
    ofType('APP_INIT_BEGIN'),
    flatMap(() => [
      langActions.fetchLangsBegin(),
      rolesActions.fetchRolesBegin(),
    ])
  )