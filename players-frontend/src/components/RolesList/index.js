import * as playersActions from '@reducers/players/playersActions'
import * as rolesActions from '@reducers/roles/rolesActions'

import RolesList from './RolesList'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  roles: state.roles.data
    .filter((role) => role.listed)
    .sort((prevRole, currRole) => prevRole.order - currRole.order)
    .sort((prevRole, currRole) => prevRole.required - currRole.required),
  loading: state.roles.loading,
  error: state.roles.error,
})

const mapDispatchToProps = (dispatch) => ({
  toggleRole: (code) => dispatch(rolesActions.toggleRole(code)),
  changeNumberOfPlayers: (numberOfPlayers) =>
    dispatch(playersActions.changeNumberOfPlayers(numberOfPlayers)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RolesList)
