import withStyles, { WithSheet } from 'react-jss'

import PropTypes from 'prop-types'
import React from 'react'
import TextField from '@material-ui/core/TextField'
import { compose } from 'recompose'
import styles from './TextInputStyles'
import { useIntl } from 'react-intl'

const TextInputPicker: React.FC<TextInputPickerProps> = ({
  classes,
  onChange,
  numberOfPlayers,
}) => {
  const intl = useIntl()

  return (
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
}

interface TextInputPickerProps extends WithSheet<typeof styles> {
  onChange: React.ChangeEventHandler
  numberOfPlayers: number
}

TextInputPicker.propTypes = {
  classes: PropTypes.object.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default compose(withStyles(styles))(TextInputPicker)
