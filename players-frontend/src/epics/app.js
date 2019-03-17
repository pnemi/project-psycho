import * as rolesActions from '@reducers/roles/rolesActions'

import { flatMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'

export const appInitEpic = (action$) =>
  action$.pipe(
    ofType('APP_INIT_BEGIN'),
    flatMap(() => [rolesActions.fetchRolesBegin()])
  )
