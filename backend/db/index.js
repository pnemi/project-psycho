import mongoose from 'mongoose'
import config from 'config'
import Role from './model/Role'
import Language from './model/Language'
import Team from './model/Team'

const MONGO_CONNECTION_STRING = config.get('MONGO_CONNECTION_STRING')

const mongooseConfig = {
  useNewUrlParser: true
}

mongoose.Promise = global.Promise
mongoose.connect(MONGO_CONNECTION_STRING, mongooseConfig)

export {
  Role,
  Language,
  Team
}
