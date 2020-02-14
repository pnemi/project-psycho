import Language from './model/Language'
import Preset from './model/Preset'
import Role from './model/Role'
import Team from './model/Team'
import Translation from './model/Translation'
import config from 'config'
import mongoose from 'mongoose'

const MONGO_CONNECTION_STRING: string = config.get('MONGO_CONNECTION_STRING')

const mongooseConfig = {
  useNewUrlParser: true,
  keepAlive: true,
  keepAliveInitialDelay: 300000,
}

mongoose.set('useCreateIndex', true)

mongoose.Promise = global.Promise
mongoose.connect(MONGO_CONNECTION_STRING, mongooseConfig)

export { Role, Language, Team, Preset, Translation }
