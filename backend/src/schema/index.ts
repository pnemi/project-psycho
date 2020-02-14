import fs from 'fs'
import path from 'path'

const schema = fs.readFileSync(path.resolve(__dirname, './schema.graphql'), {
  encoding: 'utf-8',
})

export default schema
