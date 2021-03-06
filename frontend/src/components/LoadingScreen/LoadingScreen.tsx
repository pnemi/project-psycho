import withStyles, { WithSheet } from 'react-jss'

import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles'

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  classes,
}) => (
  <Grid
    container
    justify="center"
    alignItems="center"
    className={classes.loadingWrapper}
  >
    <CircularProgress className={classes.loading} size={30} thickness={5} />
  </Grid>
)

interface LoadingScreenProps extends WithSheet<typeof styles> {}

LoadingScreen.propTypes = {
  classes: PropTypes.object.isRequired,
}

// @ts-ignore
export default withStyles(styles)(LoadingScreen)
