import mongoose from 'mongoose'

const teamSchema = new mongoose.Schema({
  code: { type: String, unique: true },
  translations: [{
    locale: { type: mongoose.Schema.Types.ObjectId, ref: 'Language' },
    name: { type: String },
    description: { type: String }
  }]
})

const Team = mongoose.model('Team', teamSchema)

export default Team
