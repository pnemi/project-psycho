import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    margin: 0,
    boxShadow: 'none'
  },
  toolbar: {
    justifyContent: 'center'
  },
  title: {
    textTransform: 'uppercase'
  }
};

const Header = ({ classes }) => (
  <AppBar className={classes.root} position="fixed" color="default">
    <Toolbar className={classes.toolbar}>
      <Typography className={classes.title} variant="h6" color="inherit">
        Psycho
      </Typography>
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
