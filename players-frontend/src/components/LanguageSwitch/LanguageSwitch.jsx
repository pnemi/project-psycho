import * as langActions from '@reducers/lang/langActions'

import React, { useEffect } from 'react'
import { load, save } from '@utils/storage'

import MenuItem from '@material-ui/core/MenuItem'
import PropTypes from 'prop-types'
import Select from '@material-ui/core/Select'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import styles from './styles'
import { withStyles } from '@material-ui/core/styles'

const LanguageSwitch = ({ currentLang, switchLang, classes }) => {
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
  classes: PropTypes.object.isRequired,
  switchLang: PropTypes.func.isRequired,
  currentLang: PropTypes.string.isRequired,
}

LanguageSwitch.defaultProps = {
  currentLang: load('currentLang', 'cs'),
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(LanguageSwitch)
