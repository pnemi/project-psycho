import React from 'react'
import PropTypes from 'prop-types'

import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

import styles from './TextInputStyles.js'

const NumberOfPlayersPicker = ({
  classes,
  onChange,
  numberOfPlayers,
  minNumberOfPlayers,
}) => (
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
      min: minNumberOfPlayers,
      pattern: '[0-9]*',
    }}
    margin="normal"
  />
)

NumberOfPlayersPicker.propTypes = {
  classes: PropTypes.object.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  minNumberOfPlayers: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default withStyles(styles)(NumberOfPlayersPicker)
