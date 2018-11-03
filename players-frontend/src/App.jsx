import React from 'react'
import { hot } from 'react-hot-loader'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import themeStyles from './theme'

import Layout from './components/Layout'

const client = new ApolloClient({
  uri: process.env.GQL_ENDPOINT
})

const theme = createMuiTheme(themeStyles)

const App = () => (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <Layout />
      </MuiThemeProvider>
    </ApolloProvider>
)

export default hot(module)(App)
