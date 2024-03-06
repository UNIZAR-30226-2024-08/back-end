
import mysql from 'promise-mysql';
export { query };

const pool = mysql.createPool({
    host: "casino-lotus.mysql.database.azure.com",
    user:"Roberta",
    password:"Williams8",
    database:"casino-lotus",
    port:3306
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
