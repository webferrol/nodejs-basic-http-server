# Express y nodejs

## Referencia

- [midudev](https://www.youtube.com/watch?v=o85OkeVtm7k)

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