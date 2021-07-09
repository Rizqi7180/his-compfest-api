import { body } from 'express-validator'

const validateCreateUser = [
  body('first_name')
    .exists()
    .withMessage('first_name is required')
    .isAlpha()
    .withMessage('first_name must be alphabetical characters'),
  body('last_name')
    .exists()
    .withMessage('last_name is required')
    .isAlpha()
    .withMessage('last_name must be alphabetical characters'),
  body('email')
    .exists()
    .withMessage('email is required')
    .isEmail()
    .withMessage('email is invalid'),
  body('age')
    .exists()
    .withMessage('age is required')
    .isNumeric()
    .withMessage('age is must be number'),
  body('username')
    .exists()
    .withMessage('username is required')
    .isLength({ min: 3 })
    .withMessage('username must be at least 3 chars long'),
  body('password')
    .exists()
    .withMessage('password is required')
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage('password must contain at least 6 characters'),
  body('role').isIn(['patient']).withMessage('wrong role'),
]

const validateAuthUser = [
  body('username')
    .exists()
    .withMessage('username is required')
    .isLength({ min: 3 })
    .withMessage('username must be at least 3 chars long'),
  body('password')
    .exists()
    .withMessage('password is required')
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage('password must contain at least 6 characters'),
]

export { validateCreateUser, validateAuthUser }
