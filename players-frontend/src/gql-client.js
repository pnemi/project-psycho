import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: process.env.GQL_ENDPOINT,
})

export const gqlQuery = (query) =>
  client.query({
    query,
  })

export default client
