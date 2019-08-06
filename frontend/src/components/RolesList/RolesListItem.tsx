import withStyles, { WithSheet } from 'react-jss'

import Checkbox from '@material-ui/core/Checkbox'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import PropTypes from 'prop-types'
import React from 'react'
import TeamBadge from '@psycho/components/TeamBadge'
import classnames from 'classnames'
import { compose } from 'recompose'
import styles from './RolesListItemStyles'
import { useIntl } from 'react-intl'

const RolesListItem: React.FC<RolesListProps> = ({
  classes,
  role,
  team,
  handleToggleRole,
}) => {
  const intl = useIntl()

  return (
    <ListItem
      button
      className={classes.rolesListItem}
      disableGutters
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
}

interface RolesListProps extends WithSheet<typeof styles> {
  role: Role
  team: Team
  handleToggleRole: Function
}

RolesListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  role: PropTypes.object.isRequired,
  team: PropTypes.object.isRequired,
  handleToggleRole: PropTypes.func.isRequired,
}

export default compose(withStyles(styles))(RolesListItem)
