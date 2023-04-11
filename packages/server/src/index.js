const express = require('express')
const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/value', (req, res) => {
  res.json({ value: 'Hello from the server!' })
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})

