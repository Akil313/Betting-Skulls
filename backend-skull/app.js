const express = require('express')
const request = require('request')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/newEndpoint", (req, res) => res.send("This is my new endpoint"))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})