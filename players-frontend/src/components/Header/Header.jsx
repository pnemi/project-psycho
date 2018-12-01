import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import LanguageSwitch from '../LanguageSwitch'

const styles = {
  appBar: {
    margin: 0,
    background: '#38383A',
    borderBottom: '1px solid #5D5E5F',
    boxShadow: 'none',
  },
  toolbar: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%)',
    textTransform: 'uppercase',
    '& a': {
      textDecoration: 'none',
      color: '#666',
    },
  },
  menuIcon: {
    color: '#DDD',
  },
}

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
