
import mysql from 'promise-mysql';
import dotenv from 'dotenv';
export { query };

dotenv.config(); // Lee el archivo .env y lo pone en process.env
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT)
});

const query = async (text: string, params: any[]): Promise<any> => {
    const start = Date.now();
    try {
        const res = await (await pool).query(text, params);
        const duration = Date.now() - start;
        console.log('executed query', { text, duration, rows: res ? res.length : 0 });
        return res;
    } catch (err) {
        throw err;
    }
    
};
