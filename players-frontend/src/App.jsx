import React from 'react'
import { hot } from 'react-hot-loader'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Layout from './components/Layout'

const client = new ApolloClient({
  uri: 'http://localhost:8888/graphql'
})

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true
  }
})

const App = () => (
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={theme}>
      <Layout />
    </MuiThemeProvider>
  </ApolloProvider>
)

export default hot(module)(App)
