import React, { Fragment } from 'react'
import withStyles, { WithSheet } from 'react-jss'

import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import TeamBadge from '@psycho/components/TeamBadge'
import Typography from '@material-ui/core/Typography'
import { compose } from 'recompose'
import styles from './styles'
import { useIntl } from 'react-intl'

const RoleInfoCard: React.FC<RoleInfoCardProps> = ({ classes, role, team }) => {
  const intl = useIntl()

  return (
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
}

interface RoleInfoCardProps extends WithSheet<typeof styles> {
  role: Role
  team: Team
}

RoleInfoCard.propTypes = {
  classes: PropTypes.object.isRequired,
  role: PropTypes.object.isRequired,
  team: PropTypes.object.isRequired,
}

export default compose(withStyles(styles))(RoleInfoCard)
