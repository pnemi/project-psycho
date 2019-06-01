import App from './App'
import { StoreState } from '@psycho/store'
import { connect } from 'react-redux'

const mapStateToProps = (state: StoreState) => ({
  language: state.lang.currentLang,
  translations: state.translations.data,
  isLoaded: state.app.isLoaded,
})

export default connect(mapStateToProps)(App)
