import jwt from 'jsonwebtoken'
import User from '../model/User.model.js'
import HttpException from '../utils/HttpException.js'

export function authMiddleware(req, res, next) {
  let token = req.headers['x-access-token'] || req.headers['authorization']

  token = token.replace(/^Bearer\s+/, '')

  if (!token) return next(new HttpException(400, 'Token is not provided'))

  jwt.verify(token, req.app.get('secret'), (err, decoded) => {
    if (err) return next(new HttpException(400, err.message))

    req.decoded = decoded

    next()
  })
}

export async function isAdmin(req, res, next) {
  try {
    const info = req.decoded

    if (info.role !== 'admin') {
      return next(new HttpException(403, 'Unathorized'))
    }

    const admin = await User.findById(info.id)

    if (admin.role === 'admin') next()
  } catch (err) {
    return next(new HttpException(500, err.message))
  }
}
