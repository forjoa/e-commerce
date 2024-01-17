import { sql } from '@vercel/postgres'
import 'dotenv/config'

export const clothesController = {
  getAll: async (req, res) => {
    const { rows } = await sql`SELECT * FROM clothes`
    res.status(200).send(rows)
  },
  addNew: async (req, res) => {
    const { price, size, name, available, photo } = req.body

    const { rowCount } =
      await sql`INSERT INTO clothes(price, size, name, available, photo) VALUES(${price}, ${size}, ${name}, ${available}, ${photo})`

    if (rowCount > 0) {
      res.status(200).json({ message: 'Clothes saved successfully' })
    } else {
      res
        .status(400)
        .send({ message: 'Something went wrong while saving clothes' })
    }
  },
  delete: async (req, res) => {
    const { id } = req.body

    const { rowCount } = await sql`DELETE FROM clothes WHERE id = ${id}`

    if (rowCount > 0) {
      res.status(200).json({ message: 'Clothes deleted successfully' })
    } else {
      res
        .status(400)
        .json({ message: 'Something went wrong while deleting clothes' })
    }
  },
  edit: async (req, res) => {
    const { id, price, size, name, available, photo } = req.body

    const { rowCount } = await sql`
        UPDATE clothes
        SET price = ${price},
            size = ${size},
            name = ${name},
            available = ${available},
            photo = ${photo}
        WHERE id = ${id}`

    if (rowCount > 0) {
      res.status(200).json({ message: 'Clothes edited successfully' })
    } else {
      res
        .status(400)
        .json({ message: 'Something went wrong while editing clothes' })
    }
  },
}
