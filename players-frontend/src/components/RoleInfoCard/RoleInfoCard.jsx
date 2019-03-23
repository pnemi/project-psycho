import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import styles from './styles'
import { withStyles } from '@material-ui/core'

const RoleInfoCard = ({ classes, role }) => (
  <Fragment>
    <Typography className={classes.name}>{role.name}</Typography>
    <Typography className={classes.description}>{role.description}</Typography>
  </Fragment>
)

RoleInfoCard.propTypes = {
  classes: PropTypes.object.isRequired,
  role: PropTypes.object.isRequired,
}

export default withStyles(styles)(RoleInfoCard)
