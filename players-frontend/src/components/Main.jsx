import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import RolesList from './RolesList'

const styles = {
  root: {
    minHeight: '100vh',
    paddingTop: '56px'
  }
};

const Main = ({ classes }) => (
  <Grid className={classes.root} container justify="center">
    <RolesList />
  </Grid>
)

Main.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Main)
