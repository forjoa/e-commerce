import express from 'express'
import bcrypt from 'bcrypt'
import { sql } from '@vercel/postgres'

const users = express.Router()

// register
users.post('/login', async (req, res) => {
    const { name, email, pwd } = req.body

    const hashedPassword = await bcrypt.hash(pwd, 10)

    const result = await sql`INSERT INTO users (name, email, pwd) VALUES (${name}, ${email}, ${hashedPassword})`

    res.status(200).json(result)
})

export default users