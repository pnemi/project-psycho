import mongoose from 'mongoose'

const languageSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  code: { type: String, unique: true }
})

const Language = mongoose.model('Language', languageSchema)

export default Language
