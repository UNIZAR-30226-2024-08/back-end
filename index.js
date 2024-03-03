
// Para instalar los módulos necesarios hacer npm install
// Ejecutar mediante el comando: node .
// Hacer "npm run dev" para que se reinicie el servidor automáticamente al guardar cambios

const express = require('express');
const app = express();
const PORT = 8080;

const db = require('./db/index'); // Para usar la base de datos

// Ejemplo de función asíncrona para hacer consultas a la base de datos

const aQuery = async (query, params) => {
    return new Promise((resolve, reject) => {
        db.query(query, params, (err, res) => {
            if(err) {
                reject(err);
            }
            resolve(res);
        });
    });
}

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);

    // Ejemplo de consulta a la base de datos
    const res = await aQuery('SELECT * FROM USUARIOS'); // es opcional pasar parámetros
    console.log("Resultado ", res);
});
