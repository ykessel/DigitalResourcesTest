import { Router } from 'express'
const router = Router()

import { createUser } from '../controllers/user.controller.js'

export const createUserRoute = router.post('/add', createUser)