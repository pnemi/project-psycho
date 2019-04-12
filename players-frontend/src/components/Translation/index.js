import Translation from './Translation'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  translations: state.translations.data,
  lang: state.lang.curentLang,
  loading: state.translations.loading,
})

export default connect(mapStateToProps)(Translation)
