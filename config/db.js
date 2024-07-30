
const mysql = require('mysql2/promise');

// Create the connection to database
exports.qurey = async (sql, params) => {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'todo',
            password: process.env.DATABASE_PASSWORD
        });

        const [results] = await connection.execute(sql, params);
        return results;
    } catch (err) {
        console.error('Error connecting to the database:', err);
        throw err;
    }
};


