import mongoose from 'mongoose'

const teamSchema = new mongoose.Schema({
  code: { type: String, unique: true },
  name: { type: String },
  description: { type: String },
})

const Team = mongoose.model('Team', teamSchema)

export default Team
