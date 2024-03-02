
// Para instalar los módulos necesarios hacer npm install
// Ejecutar mediante el comando: node .

const express = require('express');
const app = express();
const PORT = 8080;

const db = require('./db/index'); // Para usar la base de datos

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);

    // Ejemplo de consulta a la base de datos
    // Parámetros: query, parámetros, callback
    // Callback recibe dos parámetros: error y resultado
    db.query('SELECT * FROM USUARIOS', [], (err, res) => {
        if(err) {
            console.log(err);
        }
        console.log(res);
    });

});
