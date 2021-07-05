import Patient from '../model/Patient.model.js'

import HttpException from '../utils/HttpException.js'

export async function create(req, res, next) {
  try {
    const { first_name, last_name, email, age, username, password } = req.body

    const patient = await Patient.findOne({ email })

    if (patient) {
      return next(new HttpException(401, 'Email has been registered!'))
    }

    const newPatient = await Patient.create({
      first_name,
      last_name,
      email,
      age,
      username,
      password,
    })

    if (newPatient) {
      return res.json({
        type: 'success',
        status: 200,
        message: 'Patient added successfully',
      })
    }
  } catch (error) {
    return next(new HttpException(400, error.message))
  }
}

export function get(req, res, next) {
  return res.json({
    type: 'success',
    status: 200,
    message: 'All user',
    data: [
      {
        first_name: 'Ammar',
        last_name: 'OK',
        username: 'dummy',
        password: 'dummypass',
      },
    ],
  })
}
