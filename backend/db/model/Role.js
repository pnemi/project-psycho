import mongoose from 'mongoose'

const roleSchema = new mongoose.Schema({
  order: { type: Number, unique: true },
  code: { type: String, unique: true },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  required: { type: Boolean },
  listed: { type: Boolean },
  complement: { type: Boolean },
  assignedDuringGame: { type: Boolean },
  translations: [{
    locale: { type: mongoose.Schema.Types.ObjectId, ref: 'Language' },
    name: { type: String },
    description: { type: String }
  }]
})

const Role = mongoose.model('Role', roleSchema)

export default Role
