import express from 'express'

import * as UserController from '../controllers/User.controller.js'
import {
  validateCreateUser,
  validateAuthUser,
} from '../middleware/validator/UserValidator.middleware.js'
import validate from '../middleware/validate.middleware.js'

const router = express.Router()

router.get('/', UserController.get)
router.post('/register', validateCreateUser, validate, UserController.create)
router.post('/login', validateAuthUser, validate, UserController.auth)

export default router
