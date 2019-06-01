import { InjectedIntl, injectIntl } from 'react-intl'
import withStyles, { WithSheet } from 'react-jss'

import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import { compose } from 'recompose'
import styles from './styles'

const TeamBadge: React.FC<TeamBadgeProps> = ({
  intl,
  classes,
  team,
}) => (
  <span
    className={classnames(
      classes.team,
      classes[team.code as keyof typeof styles]
    )}
  >
    {intl.formatMessage({ id: team.name })}
  </span>
)

interface TeamBadgeProps extends WithSheet<typeof styles> {
  intl: InjectedIntl
  team: Team
}

TeamBadge.propTypes = {
  intl: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  team: PropTypes.object.isRequired,
}

export default compose(
  injectIntl,
  withStyles(styles)
)(TeamBadge)
