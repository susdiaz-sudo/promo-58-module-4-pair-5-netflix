// Importar la biblioteca de Express

const express = require("express");

// Crear una variable con todo lo que puede hacer el servidor:

const app = express();

// Arrancar el servidor en el puerto 3000:

const port = 3000;
app.listen(port, () => {
  console.log(`Uh! El servidor ya está arrancado: <http://localhost:${port}/>`);
});
