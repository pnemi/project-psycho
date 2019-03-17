import * as langActions from '@reducers/lang/langActions'

import LanguageSwitch from './LanguageSwitch'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import styles from './styles'
import { withStyles } from '@material-ui/core/styles'

const mapStateToProps = (state) => ({
  currentLang: state.lang.currentLang,
  languages: state.lang.data,
})

const mapDispatchToProps = (dispatch) => ({
  switchLang: (lang) => dispatch(langActions.switchLang(lang)),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(LanguageSwitch)
