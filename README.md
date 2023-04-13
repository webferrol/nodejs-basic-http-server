# Express y nodejs

## Referencia

- [midudev](https://www.youtube.com/watch?v=o85OkeVtm7k)

## Conceptos
- [HTTP Server](https://nodejs.org/docs/v0.4.7/api/http.html)

- [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)

## Instalaciones

- nodemon

Para ejecutar __nodemon__ en consola:

```sh
./node_modules/nodemon/bin/nodemon index.js
```

En los scripts de package.json podemos escribir el siguiente código:

```json
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

Si observamos bien no ponemos toda la ruta. Esto es porque node busca directamente los ejecutables en los archivos __bin__

## Ejemplo de código

```js
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
```