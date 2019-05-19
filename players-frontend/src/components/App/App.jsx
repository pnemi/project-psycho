import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import { ApolloProvider } from 'react-apollo'
import { IntlProvider } from 'react-intl'
import Layout from '@psycho/components/Layout'
import PropTypes from 'prop-types'
import React from 'react'
import gqlClient from '@psycho/services/gql-client'
import { hot } from 'react-hot-loader'
import themeStyles from '../../theme'

const theme = createMuiTheme(themeStyles)

const App = ({ language, translations, isLoaded }) => (
  <ApolloProvider client={gqlClient}>
    <MuiThemeProvider theme={theme}>
      {isLoaded && translations[language] ? (
        <IntlProvider locale={language} messages={translations[language]}>
          <Layout />
        </IntlProvider>
      ) : (
        <Layout isLoading />
      )}
    </MuiThemeProvider>
  </ApolloProvider>
)

App.propTypes = {
  language: PropTypes.string.isRequired,
  translations: PropTypes.object.isRequired,
  isLoaded: PropTypes.bool.isRequired,
}

export default hot(module)(App)
