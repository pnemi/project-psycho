import React, { Fragment } from 'react'

import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import TeamBadge from '@psycho/components/TeamBadge'
import Typography from '@material-ui/core/Typography'
import { injectIntl } from 'react-intl'
import styles from './styles'
import { withStyles } from '@material-ui/core'

const RoleInfoCard = ({ intl, classes, role, team }) => (
  <Fragment>
    <Grid container alignItems="center" justify="center" direction="column">
      <Typography className={classes.name}>
        {intl.formatMessage({ id: role.name })}
      </Typography>
      <TeamBadge team={team} />
    </Grid>
    <Typography className={classes.description}>
      {intl.formatMessage({ id: role.description })}
    </Typography>
  </Fragment>
)

RoleInfoCard.propTypes = {
  intl: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  role: PropTypes.object.isRequired,
  team: PropTypes.object.isRequired,
}

export default injectIntl(withStyles(styles)(RoleInfoCard))
