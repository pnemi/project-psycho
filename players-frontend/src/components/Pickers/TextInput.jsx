import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  field: {
    width: '100%',
    margin: '0',
    '& input::-webkit-inner-spin-button, input::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: '0'
    }
  }
}

const NumberOfPlayersPicker = ({ classes, onChange, numberOfPlayers, minNumberOfPlayers }) => (
  <TextField
    className={classes.field}
    label="Number of Players"
    value={numberOfPlayers || ''}
    onChange={onChange}
    type="number"
    InputLabelProps={{
      shrink: true,
    }}
    inputProps={{
      min: minNumberOfPlayers
    }}
    margin="normal"
  />
)

NumberOfPlayersPicker.propTypes = {
  classes: PropTypes.object.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  minNumberOfPlayers: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default withStyles(styles)(NumberOfPlayersPicker)
