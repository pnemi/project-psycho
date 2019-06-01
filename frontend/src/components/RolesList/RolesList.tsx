import withStyles, { WithSheet } from 'react-jss'

import List from '@material-ui/core/List'
import PropTypes from 'prop-types'
import React from 'react'
import RolesListItem from './RolesListItem'
import { TeamDictionary } from '@psycho/store/teams/teamsActions'
import { save } from '@psycho/utils/storage'
import styles from './styles'

const RolesList: React.FC<RolesListProps> = ({
  roles,
  teams,
  loading,
  error,
  classes,
  toggleRole,
}) => {
  const handleToggleRole = (role: Role) => {
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

interface RolesListProps extends WithSheet<typeof styles> {
  roles: Array<Role>
  teams: TeamDictionary
  loading: boolean
  error: any
  toggleRole: Function
}

RolesList.propTypes = {
  classes: PropTypes.object.isRequired,
  roles: PropTypes.array.isRequired,
  teams: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  toggleRole: PropTypes.func.isRequired,
}

// @ts-ignore
export default withStyles(styles)(RolesList)
