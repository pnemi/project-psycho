import mongoose from 'mongoose'

const roleSchema = new mongoose.Schema({
  code: { type: String, unique: true },
  translations: [{
    locale: { type: mongoose.Schema.Types.ObjectId, ref: 'Language' },
    name: { type: String },
    description: { type: String }
  }]
})

const Role = mongoose.model('Role', roleSchema)

export default Role
