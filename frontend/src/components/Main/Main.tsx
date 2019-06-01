import withStyles, { WithSheet } from 'react-jss'

import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import React from 'react'
import Routes from '@psycho/components/Routes'
import styles from './styles'

const Main: React.FC<MainProps> = ({ classes }) => (
  <Grid
    container
    className={classes.main}
    direction="column"
    justify="center"
    component="main"
    alignItems="center"
  >
    <Routes />
  </Grid>
)

interface MainProps extends WithSheet<typeof styles> {}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
}

// @ts-ignore
export default withStyles(styles)(Main)
