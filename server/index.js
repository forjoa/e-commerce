import express from 'express'
import cors from 'cors'

import clothes from './api/clothes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/clothes', clothes)

app.listen(5000, () => console.log('connected'))