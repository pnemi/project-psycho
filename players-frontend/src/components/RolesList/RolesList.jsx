import Checkbox from '@material-ui/core/Checkbox'
import CircularProgress from '@material-ui/core/CircularProgress'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import { save } from '@utils/storage'
import styles from './styles'
import { truncate } from '@utils/utils'
import { withStyles } from '@material-ui/core/styles'

const RolesList = ({ roles, loading, error, classes, toggleRole }) => {
  const handleToggleRole = (role) => {
    if (!role.required) {
      save(`${role.code}.checked`, !role.checked)
      toggleRole(role.code)
    }
  }

  const content = (() => {
    if (loading) {
      return (
        <CircularProgress className={classes.loading} size={30} thickness={5} />
      )
    }

    if (error) {
      return <p className={classes.error}>{error.message}</p>
    }

    return roles.map(
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
    )
  })()

  return <List className={classes.rolesList}>{content}</List>
}

RolesList.propTypes = {
  classes: PropTypes.object.isRequired,
  roles: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  toggleRole: PropTypes.func.isRequired,
}

export default withStyles(styles)(RolesList)
