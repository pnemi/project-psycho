import PropTypes from 'prop-types'
import React from 'react'
import TextField from '@material-ui/core/TextField'
import styles from './TextInputStyles.js'
import { withStyles } from '@material-ui/core/styles'

const TextInputPicker = ({ classes, onChange, numberOfPlayers }) => (
  <TextField
    className={classes.field}
    label="Number of Players"
    value={numberOfPlayers || ''}
    onChange={onChange}
    type="text"
    InputLabelProps={{
      shrink: true,
    }}
    inputProps={{
      pattern: '[0-9]*',
    }}
    margin="normal"
  />
)

TextInputPicker.propTypes = {
  classes: PropTypes.object.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default withStyles(styles)(TextInputPicker)
