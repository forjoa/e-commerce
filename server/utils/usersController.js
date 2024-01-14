import bcrypt from 'bcrypt'
import { sql } from '@vercel/postgres'
import 'dotenv/config'

export const usersController = {
    login: async (req, res) => {
        const { email, pwd } = req.body
      
        const { rows } = await sql`SELECT * FROM users WHERE email = ${email}`
      
        if (rows.length > 0) {
          const pwdHashed = rows[0].pwd
      
          const match = await bcrypt.compare(pwd, pwdHashed)
      
          if (match) {
            res.status(200).send('user logging correct')
          } else {
            res.status(401).send('incorrect password')
          }
        } else {
          res.status(404).send('user not found')
        }
      },
      register: async (req, res) => {
        const { name, email, pwd } = req.body
      
        const { rows } = await sql`SELECT * FROM users WHERE email = ${email}`
      
        if (rows.length == 0) {
          const hashedPassword = await bcrypt.hash(pwd, 10)
      
          const result =
            await sql`INSERT INTO users (name, email, pwd) VALUES (${name}, ${email}, ${hashedPassword})`
      
          if (result.rowCount > 0) {
            res.status(200).send('user registered correctly')
          } else {
            res.status(400).send('something went wrong')
          }
        } else res.status(409).send('user already registered')
      }
}