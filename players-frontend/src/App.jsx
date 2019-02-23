import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import { ApolloProvider } from 'react-apollo'
import Layout from './components/Layout'
import React from 'react'
import gqlClient from './gql-client'
import { hot } from 'react-hot-loader'
import themeStyles from './theme'

const theme = createMuiTheme(themeStyles)

const App = () => (
  <ApolloProvider client={gqlClient}>
    <MuiThemeProvider theme={theme}>
      <Layout />
    </MuiThemeProvider>
  </ApolloProvider>
)

export default hot(module)(App)
