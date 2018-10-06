import React from 'react'
import { hot } from 'react-hot-loader'
import ApolloClient from "apollo-boost"
import { ApolloProvider } from 'react-apollo'
import Layout from './components/Layout'

const client = new ApolloClient({
  uri: "http://localhost:8888/graphql"
})

const App = () => (
  <ApolloProvider client={client}>
    <Layout />
  </ApolloProvider>
)

export default hot(module)(App)
