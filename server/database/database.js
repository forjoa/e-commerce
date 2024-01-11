import { Pool } from 'pg'

const pool = new Pool({
  connectionString: import.meta.env.VITE_POSTGRES_URL + "?sslmode=require",
})

console.log(pool)