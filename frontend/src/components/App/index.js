import App from './App'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  language: state.lang.currentLang,
  translations: state.translations.data,
  isLoaded: state.app.isLoaded,
})

export default connect(mapStateToProps)(App)
