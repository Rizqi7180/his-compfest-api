import express from 'express'

import * as AppointmentController from '../controllers/Appointment.controller.js'
import { authMiddleware, isAdmin } from '../middleware/auth.middleware.js'
import validate from '../middleware/validate.middleware.js'
import {
  validateApplyAppointment,
  validateCreateAppointment,
  validateDeleteAppointment,
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
router.delete(
  '/delete/:id',
  authMiddleware,
  isAdmin,
  validateDeleteAppointment,
  validate,
  AppointmentController.remove
)
router.post(
  '/apply',
  authMiddleware,
  validateApplyAppointment,
  validate,
  AppointmentController.apply
)

export default router
