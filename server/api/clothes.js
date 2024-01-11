import express from 'express'
import { sql } from '@vercel/postgres'
import 'dotenv/config'

const clothes = express.Router()

// get all clothes 
clothes.get('/allClothes', async (req, res) => {
    const result = await sql`SELECT * FROM clothes`
    res.status(200).send(result.rows)
})

export default clothes 