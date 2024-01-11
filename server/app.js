import express from 'express'
import cors from 'cors'

import pool from './database/database.js'



const app = express()

app.use(cors())
app.use(express.json())

// eslint-disable-next-line no-undef
app.listen(3000, () => console.log('connected', pool))