var express = require('express')
var router = express.Router()
var course_controller = require('../controllers/courseController')

/// COURSES ROUTES ///

// GET 前期授業一覧を取得する
router.get('/early', course_controller.early_course_list)

// GET 前期授業の詳細を取得する
router.get('/early/:id', course_controller.early_course_details)

// GET 後期授業一覧を取得する
router.get('/latter', course_controller.latter_course_list)

// GET 後期授業の詳細を取得する
router.get('/latter/:id', course_controller.latter_course_details)

// GET コメントの詳細を取得する
router.get('/comments/:id', course_controller.comments_details)

// POST コメントを投稿する
router.post('/comments/create', course_controller.comments_create)

module.exports = router;