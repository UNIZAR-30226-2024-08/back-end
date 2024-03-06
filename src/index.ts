
// Para instalar los módulos necesarios hacer npm install
// Ejecutar mediante el comando: node .
// Hacer "npm run dev" para que se reinicie el servidor automáticamente al guardar cambios

import express from 'express';
import cors from 'cors';


const app = express();
const PORT = 3001;
app.use(cors()); // Esto permite que el servidor sea accedido desde cualquier origen


// Ejemplo de función asíncrona para hacer consultas a la base de datos
import * as db from './db/index'; // Para usar la base de datos

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);

    // Ejemplo de consulta a la base de datos
    const res = await db.query("SELECT * FROM USUARIOS", []); // IMPORTANTE poner await
    console.log("Resultado ", res);
});
