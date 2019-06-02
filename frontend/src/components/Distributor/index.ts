import * as gameActions from '@psycho/store/game/gameActions'

import { filterComplementRoles, filterSelectedRoles } from '@psycho/utils/roles'

import { Dispatch } from 'redux'
import Distributor from './Distributor'
import { StoreState } from '@psycho/store'
import { connect } from 'react-redux'

const mapStateToProps = (state: StoreState) => ({
  numberOfPlayers: state.players.numberOfPlayers,
  selectedRoles: filterSelectedRoles(state.roles.data),
  complementRoles: filterComplementRoles(state.roles.data),
  teams: state.teams.data,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  stopRoleDistribution: () => dispatch(gameActions.stopRoleDistribution()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Distributor)
