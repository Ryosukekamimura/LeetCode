var express = require('express')
var router = express.Router()

/* GET HOME PAGE */
router.get('/', (req, res) => {
  res.json({
    "route" : "Home"
  })
})

router.get('/test', (req, res) => {
  res.json({
    "route" : "Test"
  })
})

module.exports = router;