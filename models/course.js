var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CourseSchema = new Schema({
  lecture_code : {type: String, required: true},
  lecture_title : {type: String},
  lecture_season : {type: String},
  teacher_name : {type: String},
  like: {type: Number},
  unlike: {type: Number},
  is_early_course: {type: Number},
})

module.exports = mongoose.model('Course', CourseSchema)