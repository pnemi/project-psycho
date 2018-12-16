import React from 'react'
import { hot, setConfig } from 'react-hot-loader'
import { ApolloProvider } from 'react-apollo'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import themeStyles from './theme'

import gqlClient from './gql-client'

import Layout from './components/Layout'

setConfig({
  pureSFC: true,
  ignoreSFC: true,
  pureRender: true,
})

const theme = createMuiTheme(themeStyles)

const App = () => (
  <ApolloProvider client={gqlClient}>
    <MuiThemeProvider theme={theme}>
      <Layout />
    </MuiThemeProvider>
  </ApolloProvider>
)

export default hot(module)(App)
