import jwt from 'jsonwebtoken'
import HttpException from '../utils/HttpException'

export default function authMiddlewar(req, res, next) {
  let token = req.headers['x-access-token'] || req.headers['authorization']

  token = token.replace(/^Bearer\s+/, '')

  if (!token) return next(new HttpException(400, 'Token is not provided'))

  jwt.verify(token, app.get('secret'), (err, decoded) => {
    if (err) return next(new HttpException(400, 'Token is invalid'))

    req.decoded = decoded
    next()
  })
}
