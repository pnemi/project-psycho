import CircularProgress from '@material-ui/core/CircularProgress'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles'
import { withStyles } from '@material-ui/core/styles'

const LoadingScreen = ({ classes }) => (
  <CircularProgress className={classes.loading} size={30} thickness={5} />
)

LoadingScreen.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LoadingScreen)
