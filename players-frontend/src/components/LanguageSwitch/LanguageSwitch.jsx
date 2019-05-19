import React, { useEffect } from 'react'

import MenuItem from '@material-ui/core/MenuItem'
import PropTypes from 'prop-types'
import Select from '@material-ui/core/Select'
import { save } from '@utils/storage'
import styles from './styles'
import withStyles from 'react-jss'

const LanguageSwitch = ({ languages, currentLang, switchLang, classes }) => {
  useEffect(() => save('currentLang', currentLang), [currentLang])

  return (
    <Select
      value={currentLang}
      classes={{
        icon: classes.icon,
        select: classes.select,
      }}
      onChange={(e) => {
        const { value } = e.target
        switchLang(value)
      }}
      disableUnderline
    >
      {languages.map(({ name, code }) => (
        <MenuItem className={classes.selectItem} value={code} key={code}>
          {name}
        </MenuItem>
      ))}
    </Select>
  )
}

LanguageSwitch.propTypes = {
  classes: PropTypes.object.isRequired,
  switchLang: PropTypes.func.isRequired,
  currentLang: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
}

export default withStyles(styles)(LanguageSwitch)
