import mongoose from 'mongoose'

const translationSchema = new mongoose.Schema({
  code: { type: String, unique: true },
  cs: { type: String },
  en: { type: String },
})

const Translation = mongoose.model('Translation', translationSchema)

export default Translation
