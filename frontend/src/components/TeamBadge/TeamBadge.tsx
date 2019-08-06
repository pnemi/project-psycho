import withStyles, { WithSheet } from 'react-jss'

import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import { compose } from 'recompose'
import styles from './styles'
import { useIntl } from 'react-intl'

const TeamBadge: React.FC<TeamBadgeProps> = ({ classes, team }) => {
  const intl = useIntl()

  return (
    <span
      className={classnames(
        classes.team,
        classes[team.code as keyof typeof styles]
      )}
    >
      {intl.formatMessage({ id: team.name })}
    </span>
  )
}

interface TeamBadgeProps extends WithSheet<typeof styles> {
  team: Team
}

TeamBadge.propTypes = {
  classes: PropTypes.object.isRequired,
  team: PropTypes.object.isRequired,
}

export default compose(withStyles(styles))(TeamBadge)
