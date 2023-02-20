import express from 'express'
import { HeaderParserController } from '../controller/HeaderParserController'

const router = express.Router()

router.get('/whoami', HeaderParserController)

export default router
