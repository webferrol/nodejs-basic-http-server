const http = require('http') // commonjs

const app = http.createServer(
  (request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end('Hello World')
  }
)

const PORT = 3000 // Se coge otro puerto porque http corre en 80 y https en 443
app.listen(PORT)
console.log(`Server running on port: ${PORT}`)
