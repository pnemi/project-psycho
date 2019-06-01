import * as rolesActions from '@psycho/store/roles/rolesActions'

import { Dispatch } from 'redux'
import RolesList from './RolesList'
import { StoreState } from '@psycho/store'
import { connect } from 'react-redux'
import { filterListRoles } from '@psycho/utils/roles'

const mapStateToProps = (state: StoreState) => ({
  roles: filterListRoles(state.roles.data),
  loading: state.roles.loading,
  error: state.roles.error,
  teams: state.teams.data,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleRole: (code: string) => dispatch(rolesActions.toggleRole(code)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RolesList)
