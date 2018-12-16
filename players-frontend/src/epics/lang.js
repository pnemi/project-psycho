import * as rolesActions from '@reducers/roles/rolesActions'
import * as langActions from '@reducers/lang/langActions'
import { ofType } from 'redux-observable'
import { mapTo } from 'rxjs/operators'

export const switchLangEpic = (action$) =>
  action$.pipe(
    ofType(langActions.SWITCH_LANG),
    mapTo(rolesActions.fetchRolesBegin())
  )
