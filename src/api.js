const express = require('express')
const serverless = require('serverless-http')


const app = express()

const router = express.Router()

var indexRouter = require('../routes/index')


app.use('/.netlify/functions/api', indexRouter)


module.exports.handler = serverless(app)