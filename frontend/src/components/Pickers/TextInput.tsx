import { InjectedIntl, injectIntl } from 'react-intl'
import withStyles, { WithSheet } from 'react-jss'

import PropTypes from 'prop-types'
import React from 'react'
import TextField from '@material-ui/core/TextField'
import { compose } from 'recompose'
import styles from './TextInputStyles'

const TextInputPicker: React.FC<TextInputPickerProps> = ({
  intl,
  classes,
  onChange,
  numberOfPlayers,
}) => (
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

interface TextInputPickerProps extends WithSheet<typeof styles> {
  intl: InjectedIntl
  onChange: React.ChangeEventHandler
  numberOfPlayers: number
}

TextInputPicker.propTypes = {
  intl: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default compose(
  injectIntl,
  withStyles(styles)
)(TextInputPicker)
