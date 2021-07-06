import { body } from 'express-validator'

const validateCreateAppointment = [
  body('doctor_name')
    .exists()
    .withMessage('doctor_name is required')
    .isString()
    .withMessage('doctor_name must be alphabetical characters'),
  body('description')
    .exists()
    .withMessage('description is required')
    .isString()
    .withMessage('description must be alphabetical characters'),
  body('registrant_list')
    .exists()
    .withMessage('registrant_list is required')
    .isArray()
    .withMessage('registrant_list must be array list of patient'),
]

const validateUpdateAppointment = [
  body('id').exists().withMessage('Id is required'),
]

const validateApplyAppointment = [
  body('id').exists().withMessage('Id is required'),
  body('user_id').exists().withMessage('User_id is required'),
]

export {
  validateCreateAppointment,
  validateUpdateAppointment,
  validateApplyAppointment,
}
