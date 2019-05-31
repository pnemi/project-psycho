import * as teamsActions from '@psycho/store/teams/teamsActions'

import { ActionsObservable, ofType } from 'redux-observable'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { from, of } from 'rxjs'

import _ from 'lodash'
import { fetchTeams } from '@psycho/services/teamsService'

const unwrapTeams = ({ data }: { data: { teams: Array<Team> } }) => data.teams

export const fetchTeamsEpic = (
  action$: ActionsObservable<teamsActions.TeamsActionTypes>
) =>
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
