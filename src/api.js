const express = require('express')
const serverless = require('serverless-http')
const mongoose = require('mongoose')
const cors = require('cors')
const helmet = require('helmet')

/// routers ///
var indexRouter = require('../routes/index')

/// database ///
var mongoDB = 'mongodb+srv://dbUser:gifu@cluster0.rsz4k.mongodb.net/mydatabase?retryWrites=true&w=majority'
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true })
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

/// express setup ///
const app = express()
const router = express.Router()

/// cors settings ///
var corsOptions = {
  origin: 'https://gifu-zenkyo.netlify.app/',
  credentials: true,
  optionsSuccessStatus: 200
}

/// express use ///
app.use('/.netlify/functions/api/v1', indexRouter)
app.use(cors(corsOptions))
app.use(helmet())

module.exports.handler = serverless(app)