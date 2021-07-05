function errorMiddleware(error, req, res, next) {
  let { status = 500, message, ...data } = error

  message = status === 500 && !message ? 'Internal server error' : message

  console.error(`[Error] ${status} - ${message}`)

  error = {
    type: 'error',
    status,
    message,
    ...(data && data),
  }

  res.status(status).json(error)
}

export default errorMiddleware
