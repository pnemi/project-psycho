import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  input: {
    width: '100%',


  }
}

const NumberOfPlayersPicker = ({ classes, onChange }) => (
  <TextField
    className={classes.input}
    label="Number of Players"
    onChange={(e) => onChange(e.target.value)}
    type="text"
    InputLabelProps={{
      shrink: true,
    }}
    margin="normal"
  />
)

NumberOfPlayersPicker.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

export default withStyles(styles)(NumberOfPlayersPicker)
