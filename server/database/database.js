import { Pool } from 'pg'

const pool = new Pool({
  connectionString: import.meta.env.VITE_POSTGRES_URL + "?sslmode=require",
})
  
pool.connect((err) => {
  if (err) throw err
  console.log('Connection made successful')
})

export default pool