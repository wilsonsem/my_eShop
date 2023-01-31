import express from 'express'
import { authUser} from '../controllers/userContoller.js'

const router = express.Router()

router.post('/login', authUser)

export default router