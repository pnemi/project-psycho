import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import LanguageSwitch from '@components/LanguageSwitch'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import PropTypes from 'prop-types'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import styles from './styles'
import { withStyles } from '@material-ui/core/styles'

const Header = ({ classes }) => (
  <AppBar className={classes.appBar} position="fixed" color="default">
    <Toolbar className={classes.toolbar}>
      <IconButton aria-label="Open drawer" className={classes.menuIcon}>
        <MenuIcon />
      </IconButton>
      <Typography className={classes.title} variant="h6" color="inherit">
        <Link to="/">Psycho</Link>
      </Typography>
      <LanguageSwitch />
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
