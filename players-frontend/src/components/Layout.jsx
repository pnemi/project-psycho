import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Header from './Header'
import Main from './Main'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  layout: {
    padding: '0 15px',
  },
}

const Layout = ({ classes }) => (
  <Grid container className={classes.layout}>
    <CssBaseline />
    <Header />
    <Main />
  </Grid>
)

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Layout)
