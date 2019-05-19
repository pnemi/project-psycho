import * as teamsActions from '@psycho/store/teams/teamsActions'

import { catchError, map, mergeMap } from 'rxjs/operators'
import { from, of } from 'rxjs'

import _ from 'lodash'
import { fetchTeams } from '@psycho/services/teamsService'
import { ofType } from 'redux-observable'

const unwrapTeams = ({ data }) => data.teams

export const fetchTeamsEpic = (action$) =>
  action$.pipe(
    ofType(teamsActions.FETCH_TEAMS_BEGIN),
    mergeMap(() =>
      from(fetchTeams()).pipe(
        map(unwrapTeams),
        map((teams) => _.keyBy(teams, 'code')),
        map((teams) => teamsActions.fetchTeamsSuccess(teams)),
        catchError((error) => of(teamsActions.fetchTeamsError(error)))
      )
    )
  )
