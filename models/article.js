const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Article = new Schema(
  {
    title: { type: String, required: true },
    imgURL: { type: String, required: true },
    body: { type: String, required: true },
    username: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('articles', Article)