import express from 'express'

import * as AppointmentController from '../controllers/Appointment.controller.js'
import { authMiddleware, isAdmin } from '../middleware/auth.middleware.js'
import validate from '../middleware/validate.middleware.js'
import {
  validateCreateAppointment,
  validateUpdateAppointment,
} from '../middleware/validator/AppointmentValidator.middleware.js'

const router = express.Router()

router.get('/', authMiddleware, isAdmin, AppointmentController.get)
router.post(
  '/',
  authMiddleware,
  isAdmin,
  validateCreateAppointment,
  validate,
  AppointmentController.create
)
router.put(
  '/update',
  authMiddleware,
  isAdmin,
  validateUpdateAppointment,
  validate,
  AppointmentController.update
)

export default router
