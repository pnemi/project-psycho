import * as playersActions from '@reducers/players/playersActions'
import * as rolesActions from '@reducers/roles/rolesActions'

import React, { Fragment, useEffect } from 'react'

import Checkbox from '@material-ui/core/Checkbox'
import CircularProgress from '@material-ui/core/CircularProgress'
import Controls from '@components/Controls'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import PropTypes from 'prop-types'
import RolesAssigner from '@components/RolesAssigner'
import classnames from 'classnames'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { save } from '@utils/storage'
import styles from './styles'
import { truncate } from '@utils/utils'
import { withStyles } from '@material-ui/core/styles'

const RolesList = ({
  roles,
  loading,
  error,
  classes,
  fetchRoles,
  toggleRole,
  isDistributing,
}) => {
  // useEffect(() => {
  //   fetchRoles()
  // }, [])

  const handleToggleRole = (role) => {
    if (!role.required) {
      save(`${role.code}.checked`, !role.checked)
      toggleRole(role.code)
    }
  }

  if (isDistributing) {
    return <RolesAssigner />
  }

  if (loading) {
    return (
      <CircularProgress className={classes.loading} size={30} thickness={5} />
    )
  }

  if (error) {
    return <p className={classes.error}>{error.message}</p>
  }

  return (
    <Fragment>
      <Controls />
      <List className={classes.rolesList}>
        {roles.map(
          (
            { code, name, description, checked, required, assignedDuringGame },
            i,
            roles
          ) => (
            <ListItem
              key={code}
              role={undefined}
              dense
              button
              onClick={() => handleToggleRole(roles[i])}
            >
              <Checkbox
                disabled={required}
                checked={checked}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText
                primary={name}
                secondary={truncate(description, 40)}
                className={classnames({
                  [classes.assignedDuringGame]: assignedDuringGame,
                })}
              />
            </ListItem>
          )
        )}
      </List>
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  roles: state.roles.data
    .filter((role) => role.listed)
    .sort((prevRole, currRole) => prevRole.order - currRole.order)
    .sort((prevRole, currRole) => prevRole.required - currRole.required),
  loading: state.roles.loading,
  error: state.roles.error,
  isDistributing: state.game.isDistributing,
})

const mapDispatchToProps = (dispatch) => ({
  fetchRoles: () => dispatch(rolesActions.fetchRoles()),
  toggleRole: (code) => dispatch(rolesActions.toggleRole(code)),
  changeNumberOfPlayers: (numberOfPlayers) =>
    dispatch(playersActions.changeNumberOfPlayers(numberOfPlayers)),
})

RolesList.propTypes = {
  classes: PropTypes.object.isRequired,
  roles: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  fetchRoles: PropTypes.func.isRequired,
  toggleRole: PropTypes.func.isRequired,
  isDistributing: PropTypes.bool.isRequired,
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(RolesList)
