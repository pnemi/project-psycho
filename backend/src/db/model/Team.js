import mongoose from 'mongoose'

const teamSchema = new mongoose.Schema({
  code: { type: String, unique: true },
  name: { type: String, unique: true },
  description: { type: String, unique: true },
})

const Team = mongoose.model('Team', teamSchema)

export default Team
