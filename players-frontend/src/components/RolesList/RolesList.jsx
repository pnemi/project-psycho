import CircularProgress from '@material-ui/core/CircularProgress'
import List from '@material-ui/core/List'
import PropTypes from 'prop-types'
import React from 'react'
import RolesListItem from './RolesListItem'
import { save } from '@utils/storage'
import styles from './styles'
import { withStyles } from '@material-ui/core/styles'

const RolesList = ({ roles, loading, error, classes, toggleRole }) => {
  const handleToggleRole = (role) => {
    if (!role.required) {
      save(`${role.code}.checked`, !role.checked)
      toggleRole(role.code)
    }
  }

  return (
    <List className={classes.rolesList}>
      {(() => {
        if (loading) {
          return (
            <CircularProgress
              className={classes.loading}
              size={30}
              thickness={5}
            />
          )
        }

        if (error) {
          return <p className={classes.error}>{error.message}</p>
        }

        return roles.map((role) => (
          <RolesListItem
            key={role.code}
            role={role}
            handleToggleRole={handleToggleRole}
          />
        ))
      })()}
    </List>
  )
}

RolesList.propTypes = {
  classes: PropTypes.object.isRequired,
  roles: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  toggleRole: PropTypes.func.isRequired,
}

export default withStyles(styles)(RolesList)
