import pg from 'pg'

const { Pool } = pg

const pool = new Pool({
  connectionString: "postgres://default:Xkvi8BDNZf0u@ep-gentle-rain-15675697-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require",
  
})
  
pool.connect((err) => {
  if (err) throw err
  console.log('Connection made successful')
})

export default pool