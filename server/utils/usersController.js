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
        res.status(200).json({ message: 'User logging correct' })
      } else {
        res.status(401).json({ message: 'Incorrect password' })
      }
    } else {
      res.status(404).json({ message: 'User not found' })
    }
  },
  register: async (req, res) => {
    const { name, email, pwd } = req.body

    const { rows } = await sql`SELECT * FROM users WHERE email = ${email}`

    if (rows.length == 0) {
      const hashedPassword = await bcrypt.hash(pwd, 10)
      const role = 'user'
      const result =
        await sql`INSERT INTO users (name, email, pwd, role) VALUES (${name}, ${email}, ${hashedPassword}, ${role})`

      if (result.rowCount > 0) {
        res.status(200).json({ message: 'User registered correctly' })
      } else {
        res.status(400).json({ message: 'Something went wrong' })
      }
    } else res.status(409).json({ message: 'User already registered' })
  },
}
