import pg from 'pg'

const { Pool } = pg

const pool = new Pool({
  connectionString: "",
})
  
pool.connect((err) => {
  if (err) throw err
  console.log('Connection made successful')
})

export default pool
