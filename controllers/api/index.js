const router = require('express').Router();
const dogRoutes = require ('./dog-routes')
const userRoutes = require ('./user-routes')
const userRoutes = require ('./image-routes')
const userRoutes = require ('./comment-routes')

router.use('/dog', dogRoutes)
router.use('/user', userRoutes)
router.use('./image', imageRoutes)
router.use('./comment', commentRoutes)


module.exports = router