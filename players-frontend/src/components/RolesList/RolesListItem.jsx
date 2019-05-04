import Checkbox from '@material-ui/core/Checkbox'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import { injectIntl } from 'react-intl'
import styles from './RolesListItemStyles'
import { withStyles } from '@material-ui/core/styles'

const RolesListItem = ({ intl, classes, role, team, handleToggleRole }) => (
  <ListItem dense button onClick={() => handleToggleRole(role)}>
    <Checkbox
      disabled={role.required}
      checked={role.checked}
      tabIndex={-1}
      disableRipple
    />
    <ListItemText
      primary={
        <span>
          <span>
            {intl.formatMessage({
              id: role.name,
            })}
          </span>
          <span className={classnames(classes.team, classes[team.code])}>
            {intl.formatMessage({ id: team.name })}
          </span>
        </span>
      }
      secondary={intl.formatMessage({ id: role.description })}
      className={classnames({
        [classes.distributedDuringGame]: role.assignedDuringGame,
        [classes.description]: true,
      })}
    />
  </ListItem>
)

RolesListItem.propTypes = {
  intl: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  role: PropTypes.object.isRequired,
  team: PropTypes.object.isRequired,
  handleToggleRole: PropTypes.func.isRequired,
}

export default injectIntl(withStyles(styles)(RolesListItem))
