import { ApolloServer, gql } from 'apollo-server-express'

import config from 'config'
import express from 'express'
import resolvers from './resolvers'
import schema from './schema'

const PORT = config.get('PORT')

const app = express()

const typeDefs = gql(schema)

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.applyMiddleware({
  app,
  cors: {
    origin: config.get('GQL_ORIGIN'),
  },
})

app.get('/', (req, res) => res.send('Creepy'))

app.listen(PORT, () => {
  console.log(`Psycho is listening on port ${PORT} 🔪`)
  console.log(`Mongo is available on ${config.get('MONGO_CONNECTION_STRING')}`)
})
