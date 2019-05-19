import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import React from 'react'
import Routes from '@components/Routes'
import styles from './styles'
import withStyles from 'react-jss'

const Main = ({ classes }) => (
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

Main.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Main)
