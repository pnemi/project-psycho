import Checkbox from '@material-ui/core/Checkbox'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import styles from './RolesListItemStyles'
import { withStyles } from '@material-ui/core/styles'

const RolesListItem = ({ classes, role, handleToggleRole }) => {
  return (
    <ListItem dense button onClick={() => handleToggleRole(role)}>
      <Checkbox
        disabled={role.required}
        checked={role.checked}
        tabIndex={-1}
        disableRipple
      />
      <ListItemText
        primary={role.name}
        secondary={role.description}
        className={classnames({
          [classes.distributedDuringGame]: role.assignedDuringGame,
          [classes.description]: true,
        })}
      />
    </ListItem>
  )
}

RolesListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  role: PropTypes.object.isRequired,
  handleToggleRole: PropTypes.func.isRequired,
}

export default withStyles(styles)(RolesListItem)
