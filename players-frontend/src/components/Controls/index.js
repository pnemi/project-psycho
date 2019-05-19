import * as gameActions from '@psycho/store/game/gameActions'
import * as playersActions from '@psycho/store/players/playersActions'

import Controls from './Controls'
import { connect } from 'react-redux'
import { getRequiredNumberOfPlayers } from '@psycho/utils/roles'

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
