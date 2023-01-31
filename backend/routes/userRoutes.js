import express from 'express'
import { authUser, getUserProfile} from '../controllers/userContoller.js'
import{ protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/login', authUser)
router.get('/profile', protect, getUserProfile)
// router.route('/profile').get( protect, getUserProfile)

export default router