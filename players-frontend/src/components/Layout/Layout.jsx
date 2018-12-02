import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/core/styles'

import Header from '@components/Header'
import Main from '@components/Main'

import styles from './styles'

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
