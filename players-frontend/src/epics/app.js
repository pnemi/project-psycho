import * as appActions from '@store/app/appActions'
import * as langActions from '@store/lang/langActions'
import * as rolesActions from '@store/roles/rolesActions'
import * as translationsActions from '@store/translations/translationsActions'

import { flatMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'

export const appInitEpic = (action$) =>
  action$.pipe(
    ofType(appActions.APP_INIT_BEGIN),
    flatMap(() => [
      langActions.fetchLangsBegin(),
      translationsActions.fetchTranslationsBegin(),
      rolesActions.fetchRolesBegin(),
    ])
  )
