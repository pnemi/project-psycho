import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { hot } from 'react-hot-loader'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import dotenv from 'dotenv'

import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Layout from './components/Layout'
import rootReducer from './reducers'

dotenv.config()

const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'development'
       ? 'http://localhost:8888/graphql'
       : 'https://project-psycho.herokuapp.com/graphql'
})

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true
  },
  palette: {
    background: {
      default: '#38383A'
    },
    text: {
      primary: '#fff',
      secondary: '#A9A9A9'
    },
    primary: {
      main: '#AA261E',
      dark: '#95231C'
    },
    secondary: {
      main: '#ccc',
      dark: '#eee',
      contrastText: '#333'
    }
  }
})

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

const App = () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Layout />
      </MuiThemeProvider>
    </ApolloProvider>
  </Provider>
)

export default hot(module)(App)
