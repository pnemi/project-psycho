import PropTypes from 'prop-types'
import React from 'react'
import TextField from '@material-ui/core/TextField'
import styles from './TextInputStyles.js'
import { withStyles } from '@material-ui/core/styles'

const NumberOfPlayersPicker = ({
  classes,
  onChange,
  numberOfPlayers,
  requiredNumberOfPlayers,
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
      min: requiredNumberOfPlayers,
      pattern: '[0-9]*',
    }}
    margin="normal"
  />
)

NumberOfPlayersPicker.propTypes = {
  classes: PropTypes.object.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  requiredNumberOfPlayers: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default withStyles(styles)(NumberOfPlayersPicker)
