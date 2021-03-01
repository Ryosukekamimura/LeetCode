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
  res.json({
    "route" : ":id"
  })
}

// GET ~/latter 後期授業一覧を取得する
exports.latter_course_list = (req, res, next) => {
  res.json({
    "route" : "latter"
  })
}

// GET ~/latter/:id 後期授業の詳細を取得する
exports.latter_course_details = (req, res, next) => {
  res.json({ 
    "route" : ":id"
  })
}

// GET ~/comments/:id コメントの詳細を取得する
exports.comments_details = (req, res, next) => {
  res.json({
    "route" : "comments_details"
  })
}

// POST ~/comments/create コメントを作成する
exports.comments_create = (req, res, next) => {
  res.json({
    "route" : "comments_create"
  })
}