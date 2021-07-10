import express from 'express'
import swaggerUI from 'swagger-ui-express'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const swaggerDocs = require('../../swagger.json')

const router = express.Router()

const options = {
  customSiteTitle: 'Healthcare Information System API',
}

router.use('/', swaggerUI.serve)
router.get('/', swaggerUI.setup(swaggerDocs, options))

export default router
