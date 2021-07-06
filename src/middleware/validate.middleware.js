import { validationResult } from 'express-validator'
import HttpException from '../utils/HttpException.js'

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return next(new HttpException(400, 'Validation failed', errors))
  }

  next()
}

export default validate
