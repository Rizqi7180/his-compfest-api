import express from 'express'

import * as UserController from '../controllers/User.controller.js'
import { validateCreateUser } from '../middleware/validator/UserValidator.middleware.js'
import validate from '../middleware/validate.middleware.js'

const router = express.Router()

router.get('/', UserController.get)
router.post('/login', validateCreateUser, validate, UserController.create)

export default router
