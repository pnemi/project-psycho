import Checkbox from '@material-ui/core/Checkbox'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import PropTypes from 'prop-types'
import React from 'react'
import TeamBadge from '@psycho/components/TeamBadge'
import classnames from 'classnames'
import { injectIntl } from 'react-intl'
import styles from './RolesListItemStyles'
import withStyles from 'react-jss'

const RolesListItem = ({ intl, classes, role, team, handleToggleRole }) => (
  <ListItem
    className={classes.rolesListItem}
    onClick={() => handleToggleRole(role)}
  >
    <Checkbox
      disabled={role.required}
      checked={role.checked}
      tabIndex={-1}
      disableRipple
    />
    <ListItemText
      primary={
        <>
          <span
            className={classnames(classes.name, {
              [classes.distributedDuringGame]: role.distributedDuringGame,
            })}
          >
            {intl.formatMessage({
              id: role.name,
            })}
          </span>
          <TeamBadge team={team} />
        </>
      }
      secondary={intl.formatMessage({ id: role.description })}
      className={classes.description}
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
