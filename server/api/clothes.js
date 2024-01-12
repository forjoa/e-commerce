import express from 'express'
import { sql } from '@vercel/postgres'
import 'dotenv/config'

const clothes = express.Router()

// get all clothes 
clothes.get('/allClothes', async (req, res) => {
    const result = await sql`SELECT * FROM clothes`
    res.status(200).send(result.rows)
})

// add new clothes
clothes.post('/addClothes', async (req, res) => {
    const { price, size, name, available, photo } = req.body

    const result = await sql`INSERT INTO clothes(price, size, name, available, photo) VALUES(${price}, ${size}, ${name}, ${available}, ${photo})`

    if (result.rowCount > 0) {
        res.status(200).send('clothes saved successfully')
    } else {
        res.status(400).send('something went wrong')
    }
})

export default clothes 