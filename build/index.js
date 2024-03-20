"use strict";
// Para instalar los módulos necesarios hacer npm install
// Ejecutar mediante el comando: node .
// Hacer "npm run dev" para que se reinicie el servidor automáticamente al guardar cambios
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use((0, cors_1.default)()); // Esto permite que el servidor sea accedido desde cualquier origen
// Ejemplo de función asíncrona para hacer consultas a la base de datos
const db = __importStar(require("./db/index")); // Para usar la base de datos
app.get('/holamundo', (req, res) => {
    res.send('Hola mundo en backend!');
});
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    // Ejemplo de consulta a la base de datos
    const res = await db.query("SELECT * FROM USUARIOS", []); // IMPORTANTE poner await
    console.log("Resultado ", res);
});
