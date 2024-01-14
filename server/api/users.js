import express from 'express'
import 'dotenv/config'
import { usersController } from '../utils/usersController.js'

const users = express.Router()

// register
users.post('/register', usersController.register)

// login
users.post('/login', usersController.login)

export default users
