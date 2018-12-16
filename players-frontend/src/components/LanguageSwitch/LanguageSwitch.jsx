import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import createUseStyles from 'react-jss-hook'

import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import * as langActions from '@reducers/lang/langActions'
import { save, load } from '@utils/storage'

import styles from './styles'

const useStyles = createUseStyles(styles)

const LanguageSwitch = ({ switchLang }) => {
  const classes = useStyles()
  const [lang, setLang] = useState(() => load('currentLang', 'cs'))

  useEffect(() => save('currentLang', lang), [lang])

  return (
    <Select
      value={lang}
      classes={{
        icon: classes.icon,
        select: classes.select,
      }}
      onChange={(e) => {
        const { value } = e.target
        setLang(value)
        switchLang(value)
      }}
      disableUnderline
    >
      <MenuItem className={classes.selectItem} value="cs">
        CZ
      </MenuItem>
      <MenuItem className={classes.selectItem} value="en">
        EN
      </MenuItem>
    </Select>
  )
}

const mapStateToProps = (state) => ({
  currentLang: state.currentLang,
})

const mapDispatchToProps = (dispatch) => ({
  switchLang: (lang) => dispatch(langActions.switchLang(lang)),
})

LanguageSwitch.propTypes = {
  switchLang: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageSwitch)
