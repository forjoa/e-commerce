import express from 'express'
import 'dotenv/config'
import { clothesController } from '../utils/clothesController.js'

const clothes = express.Router()

// get all clothes
clothes.get('/allClothes', clothesController.getAll)

// add new clothes
clothes.post('/addClothes', clothesController.addNew)

// delete clothes
clothes.post('/deleteClothes', clothesController.delete)

// edit clothes
clothes.post('/editClothes', clothesController.edit)

export default clothes
