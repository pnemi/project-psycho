import mongoose from 'mongoose'

const languageSchema = new mongoose.Schema({
  code: { type: String, unique: true },
  name: { type: String, unique: true },
})

const Language = mongoose.model('Language', languageSchema)

export default Language
