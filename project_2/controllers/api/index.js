const router = require('express').Router();
const dogRoutes = require ('./dog-routes')
const userRoutes = require ('./user-routes')

router.use('/dog', dogRoutes)
router.use('/user', userRoutes)

module.exports = router