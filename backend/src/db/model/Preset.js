import mongoose from 'mongoose'

const presetSchema = new mongoose.Schema({
  code: { type: String, unique: true },
  name: { type: String },
  roles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Role' }],
})

const Preset = mongoose.model('Preset', presetSchema)

export default Preset
