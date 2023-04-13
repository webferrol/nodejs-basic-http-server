const http = require('http') // commonjs
const data = require('./data.json')

const app = http.createServer(
  (request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(data))
  }
)

const PORT = 3001 // Se coge otro puerto porque http corre en 80 y https en 443
app.listen(PORT)
console.log(`Server running on port: ${PORT}`)
