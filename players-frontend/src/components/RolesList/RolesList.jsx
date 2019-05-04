import List from '@material-ui/core/List'
import PropTypes from 'prop-types'
import React from 'react'
import RolesListItem from './RolesListItem'
import { save } from '@utils/storage'
import styles from './styles'
import { withStyles } from '@material-ui/core/styles'

const RolesList = ({ roles, teams, loading, error, classes, toggleRole }) => {
  const handleToggleRole = (role) => {
    if (!role.required) {
      save(`${role.code}.checked`, !role.checked)
      toggleRole(role.code)
    }
  }

  return (
    <List className={classes.rolesList}>
      {(() => {
        if (loading) return

        if (error) {
          return <p className={classes.error}>{error.message}</p>
        }

        return roles.map((role) => (
          <RolesListItem
            team={teams[role.team]}
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
  teams: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  toggleRole: PropTypes.func.isRequired,
}

export default withStyles(styles)(RolesList)
