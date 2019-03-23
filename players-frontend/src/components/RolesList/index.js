import * as rolesActions from '@reducers/roles/rolesActions'

import RolesList from './RolesList'
import { connect } from 'react-redux'
import { filterListRoles } from '@utils/roles'

const mapStateToProps = (state) => ({
  roles: filterListRoles(state.roles.data),
  loading: state.roles.loading,
  error: state.roles.error,
})

const mapDispatchToProps = (dispatch) => ({
  toggleRole: (code) => dispatch(rolesActions.toggleRole(code)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RolesList)
