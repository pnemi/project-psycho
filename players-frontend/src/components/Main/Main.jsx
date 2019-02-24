import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import React from 'react'
import Routes from '@components/Routes'
import styles from './styles'
import { withStyles } from '@material-ui/core/styles'

const Main = ({ classes }) => (
  <Grid container className={classes.main} justify="center" component="main">
    <Routes />
  </Grid>
)

Main.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Main)
