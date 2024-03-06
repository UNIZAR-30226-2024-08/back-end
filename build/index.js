"use strict";
// Para instalar los módulos necesarios hacer npm install
// Ejecutar mediante el comando: node .
// Hacer "npm run dev" para que se reinicie el servidor automáticamente al guardar cambios
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 8080;
const index_1 = require("./db/index"); // Para usar la base de datos
// Ejemplo de función asíncrona para hacer consultas a la base de datos
const exampleQuery = async () => {
    const res = await (0, index_1.query)("SELECT * FROM USUARIOS", []);
    return res;
};
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    // Ejemplo de consulta a la base de datos
    const res = exampleQuery(); // es opcional pasar parámetros
    console.log("Resultado ", res);
});
