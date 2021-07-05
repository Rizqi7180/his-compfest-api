import express from 'express'

import * as PatientController from '../controllers/Patient.controller.js'
import { validateCreatePatient } from '../middleware/validator/PatientValidator.middleware.js'

const router = express.Router()

router.get('/', PatientController.get)
router.post('/', validateCreatePatient, PatientController.create)

export default router
