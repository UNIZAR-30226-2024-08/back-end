"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const pool = promise_mysql_1.default.createPool({
    host: "casino-lotus.mysql.database.azure.com",
    user: "Roberta",
    password: "Williams8",
    database: "casino-lotus",
    port: 3306
});
const query = async (text, params) => {
    const start = Date.now();
    try {
        const res = await (await pool).query(text, params);
        const duration = Date.now() - start;
        console.log('executed query', { text, duration, rows: res ? res.length : 0 });
        return res;
    }
    catch (err) {
        throw err;
    }
};
exports.query = query;
