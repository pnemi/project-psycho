import mongoose from 'mongoose'

const roleSchema = new mongoose.Schema({
  code: { type: String, unique: true },
  order: { type: Number, unique: true },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  required: { type: Boolean },
  complement: { type: Boolean },
  distributedDuringGame: { type: Boolean },
  name: { type: String, unique: true },
  description: { type: String, unique: true },
})

const Role = mongoose.model('Role', roleSchema)

export default Role
