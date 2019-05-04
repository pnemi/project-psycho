import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles'
import { withStyles } from '@material-ui/core/styles'

const LoadingScreen = ({ classes }) => (
  <Grid
    container
    justify="center"
    alignItems="center"
    className={classes.loadingWrapper}
  >
    <CircularProgress className={classes.loading} size={30} thickness={5} />
  </Grid>
)

LoadingScreen.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LoadingScreen)
