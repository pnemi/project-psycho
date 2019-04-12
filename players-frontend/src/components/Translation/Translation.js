import PropTypes from 'prop-types'

const Translation = ({ translations, lang, code, loading, defaultValue }) =>
  (loading && translations[lang][code]) || code

Translation.propTypes = {
  code: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
}

export default Translation
