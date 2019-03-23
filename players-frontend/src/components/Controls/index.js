import * as gameActions from '@store/game/gameActions'
import * as playersActions from '@store/players/playersActions'

import Controls from './Controls'
import { connect } from 'react-redux'
import { getRequiredNumberOfPlayers } from '@utils/roles'

const mapStateToProps = (state) => ({
  numberOfPlayers: state.players.numberOfPlayers,
  requiredNumberOfPlayers: getRequiredNumberOfPlayers(state.roles.data),
})

const mapDispatchToProps = (dispatch) => ({
  changeNumberOfPlayers: (numberOfPlayers) =>
    dispatch(playersActions.changeNumberOfPlayers(numberOfPlayers)),
  startRoleDistribution: () => dispatch(gameActions.startRoleDistribution()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls)
