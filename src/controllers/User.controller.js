import User from '../model/User.model.js'

import HttpException from '../utils/HttpException.js'

export async function create(req, res, next) {
  try {
    const { first_name, last_name, email, age, username, password, role } =
      req.body

    const user = await User.findOne({ email })

    if (user) {
      return next(new HttpException(401, 'Email has been registered!'))
    }

    const newUser = await User.create({
      first_name,
      last_name,
      email,
      age,
      username,
      password,
      role,
    })

    if (newUser) {
      return res.json({
        type: 'success',
        status: 200,
        message: 'User added successfully',
      })
    }
  } catch (error) {
    return next(new HttpException(400, error.message))
  }
}

export async function get(req, res, next) {
  try {
    const users = await User.find()

    return res.json({
      type: 'success',
      status: 200,
      message: 'List of user',
      data: users,
    })
  } catch (error) {
    return next(new HttpException(400, error.message))
  }
}
