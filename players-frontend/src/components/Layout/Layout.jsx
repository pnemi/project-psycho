import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Header from '@components/Header'
import LoadingScreen from '@components/LoadingScreen'
import Main from '@components/Main'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles'
import { withStyles } from '@material-ui/core/styles'

const Layout = ({ classes, isLoading }) => (
  <Grid className={classes.layout}>
    <CssBaseline />
    {isLoading ? (
      <LoadingScreen />
    ) : (
      <>
        <Header />
        <Main />
      </>
    )}
  </Grid>
)

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
}

Layout.defaultProps = {
  isLoading: false,
}

export default withStyles(styles)(Layout)
