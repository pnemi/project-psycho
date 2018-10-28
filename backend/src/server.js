import '@babel/polyfill'
import config from 'config'
import express from 'express'
import cors from 'cors'
import { ApolloServer, gql } from 'apollo-server-express'
import schema from './schema'
import resolvers from './resolvers'

const PORT = config.get('PORT')

const app = express()

app.use(cors())

const typeDefs = gql(schema)

const server = new ApolloServer({
  cors: true,
  typeDefs,
  resolvers
})

server.applyMiddleware({
  app,
  cors: true
})

app.get('/', (req, res) => res.send('Creepy'))

app.listen(PORT, () => {
  console.log(`Psycho is listening on port ${PORT} 🔪`)
  console.log(`Mongo is available on ${config.get('MONGO_CONNECTION_STRING')}`)
})
