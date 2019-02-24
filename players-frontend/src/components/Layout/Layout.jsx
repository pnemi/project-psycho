import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Header from '@components/Header'
import Main from '@components/Main'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles'
import { withStyles } from '@material-ui/core/styles'

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
