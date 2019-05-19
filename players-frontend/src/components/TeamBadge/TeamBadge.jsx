import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import { injectIntl } from 'react-intl'
import styles from './styles'
import withStyles from 'react-jss'

const TeamBadge = ({ intl, classes, team }) => (
  <span className={classnames(classes.team, classes[team.code])}>
    {intl.formatMessage({ id: team.name })}
  </span>
)

TeamBadge.propTypes = {
  intl: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  team: PropTypes.object.isRequired,
}

export default injectIntl(withStyles(styles)(TeamBadge))
