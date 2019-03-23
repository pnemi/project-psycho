import * as langActions from '@store/lang/langActions'

import LanguageSwitch from './LanguageSwitch'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  currentLang: state.lang.currentLang,
  languages: state.lang.data,
})

const mapDispatchToProps = (dispatch) => ({
  switchLang: (lang) => dispatch(langActions.switchLang(lang)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageSwitch)
