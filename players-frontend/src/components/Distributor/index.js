import * as gameActions from '@store/game/gameActions'

import { filterComplementRoles, filterDistributableRoles } from '@utils/roles'

import Distributor from './Distributor'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  numberOfPlayers: state.players.numberOfPlayers,
  selectedRoles: filterDistributableRoles(state.roles.data),
  complementRoles: filterComplementRoles(state.roles.data),
  teams: state.teams.data,
})

const mapDispatchToProps = (dispatch) => ({
  stopRoleDistribution: () => dispatch(gameActions.stopRoleDistribution()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Distributor)
