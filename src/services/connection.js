const { Pool, Client } = require("pg");

const credentials = {
    user: "pegurin",
    host: "localhost",
    database: "ans_pda",
    password: "12345678",
    port: 5432,
};


module.exports = async () => {
    try {	
        const client = new Client(credentials);
        await client.connect() 
        return client;
    } catch(err) {
        throw err;
    } 
}