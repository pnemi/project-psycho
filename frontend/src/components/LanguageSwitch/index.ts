import * as langActions from '@psycho/store/lang/langActions'

import { Dispatch } from 'redux'
import LanguageSwitch from './LanguageSwitch'
import { StoreState } from '@psycho/store'
import { connect } from 'react-redux'

const mapStateToProps = (state: StoreState) => ({
  currentLang: state.lang.currentLang,
  languages: state.lang.data,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  switchLang: (lang: string) => dispatch(langActions.switchLang(lang)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageSwitch)
