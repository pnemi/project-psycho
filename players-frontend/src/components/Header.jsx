import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    margin: '0',
    background: '#38383A',
    borderBottom: '1px solid #5D5E5F',
    boxShadow: 'none'
  },
  toolbar: {
    justifyContent: 'center'
  },
  title: {
    textTransform: 'uppercase',
    '& a': {
      textDecoration: 'none',
      color: '#666'
    }
  }
}

const Header = ({ classes }) => (
  <AppBar className={classes.root} position="fixed" color="default">
    <Toolbar className={classes.toolbar}>
      <Typography className={classes.title} variant="h6" color="inherit">
        <Link to="/">Psycho</Link>
      </Typography>
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
