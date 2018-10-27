import mongoose from 'mongoose'
import config from 'config'
import Role from './model/Role'
import Language from './model/Language'
import Team from './model/Team'
import Preset from './model/Preset'

const MONGO_CONNECTION_STRING = config.get('MONGO_CONNECTION_STRING')

const mongooseConfig = {
  useNewUrlParser: true,
  keepAlive: true,
  keepAliveInitialDelay: 300000
}

mongoose.set('useCreateIndex', true)

mongoose.Promise = global.Promise
mongoose.connect(MONGO_CONNECTION_STRING, mongooseConfig)

export {
  Role,
  Language,
  Team,
  Preset
}