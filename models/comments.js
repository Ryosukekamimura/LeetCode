var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CommentSchema = new Schema({
  course_id: {type: String},
  comment: {type: String},
  poster: {type: String},
  serverTimeStamp: {type: Date},
})

// Exports Module
module.exports = mongoose.model('Comment', CommentSchema)