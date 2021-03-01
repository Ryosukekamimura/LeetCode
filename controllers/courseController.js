var Course = require('../models/course')
var Comment = require('../models/comments')
const { body, validationResult } = require('express-validator')
var async = require('async')

// GET ~/early 前期授業一覧を取得する

exports.early_course_list = (req, res, next) => {
  Course
    .find({is_early_course: 1}, (err, result) => {
      if(err) { return next(err) }
      res.json(result)
    })
}

// GET ~/early/:id 前期授業の詳細を取得する
exports.early_course_details = (req, res, next) => {
  Course
    .findById(req.params.id)
    .exec((err, result) => {
      if (err) { return next(err) }
      res.json(result)
    })
}

// GET ~/latter 後期授業一覧を取得する
exports.latter_course_list = (req, res, next) => {
  Course
    .find({is_early_course: 0}, (err, result) => {
      if (err) { return next(err) }
      res.json(result)
    })
}

// GET ~/latter/:id 後期授業の詳細を取得する
exports.latter_course_details = (req, res, next) => {
  Course
    .findById(req.params.id)
    .exec((err, result) => {
      if (err) { return next(err) }
      res.json(result)
    })
}

// GET ~/comments/:id コメントの詳細を取得する
exports.comments_details = (req, res, next) => {
  Comment
    .find({course_id: req.params.id}, (err, result) => {
      if (err) { return next(err) }
      res.json(result)
    })
}

// POST ~/comments/create コメントを作成する
exports.comments_create = (req, res, next) => {
  // Extract validation errors from a request
  const errors = validationResult(req)
  // Create New Comment
  var comment = new Comment({
    course_id: req.body.course_id,
    comment: req.body.comment,
    poster: req.body.poster,
    serverTimeStamp: req.body.serverTimeStamp
  })

  if (!errors.isEmpty()){
    console.log('Error' + errors)
  }else{
    comment.save((err) => {
      if (err) { return next(err) }
      console.log('Success Post')
    })
  }
}