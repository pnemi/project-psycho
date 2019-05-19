import PropTypes from 'prop-types'
import React from 'react'
import TextField from '@material-ui/core/TextField'
import { injectIntl } from 'react-intl'
import styles from './TextInputStyles.js'
import withStyles from 'react-jss'

const TextInputPicker = ({ intl, classes, onChange, numberOfPlayers }) => (
  <TextField
    className={classes.field}
    label={intl.formatMessage({ id: 'APP.NUMBER_OF_PLAYERS' })}
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
  intl: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default injectIntl(withStyles(styles)(TextInputPicker))
