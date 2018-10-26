import mongoose from 'mongoose'

const presetSchema = new mongoose.Schema({
  name: { type: String },
  roles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Role' }]
})

const Preset = mongoose.model('Preset', presetSchema)

export default Preset
