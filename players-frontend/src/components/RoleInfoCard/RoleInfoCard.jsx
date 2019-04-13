import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { injectIntl } from 'react-intl'
import styles from './styles'
import { withStyles } from '@material-ui/core'

const RoleInfoCard = ({ intl, classes, role }) => (
  <Fragment>
    <Typography className={classes.name}>
      {intl.formatMessage({ id: role.name })}
    </Typography>
    <Typography className={classes.description}>
      {intl.formatMessage({ id: role.description })}
    </Typography>
  </Fragment>
)

RoleInfoCard.propTypes = {
  intl: PropTypes.object.isRequired,

  classes: PropTypes.object.isRequired,
  role: PropTypes.object.isRequired,
}

export default injectIntl(withStyles(styles)(RoleInfoCard))
