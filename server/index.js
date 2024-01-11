import express from 'express'
import cors from 'cors'

import clothes from './api/clothes.js'
import users from './api/users.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/clothes', clothes)
app.use('/api/users', users)  

app.listen(5000, () => console.log('connected'))