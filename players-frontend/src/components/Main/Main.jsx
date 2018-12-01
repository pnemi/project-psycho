import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'
import Routes from '../Routes'

const Main = ({ classes }) => (
  <Grid container className={classes.main} justify="center" component="main">
    <Routes />
  </Grid>
)

Main.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Main)
