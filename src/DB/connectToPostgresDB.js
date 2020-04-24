const {Client} = require('pg')

const client = new Client({
    user: "postgres",
    password: "alluCloud",
    host: "localhost",
    port: 5432,
    database: "allucloud"
})

client.connect()
.then(() => console.log("Connected successfully"))
.then(() => client.query("SELECT * FROM map_data.interesting_places"))
.then(results => console.table(results.rows))
.catch(e => console.log)
.finally(() => client.end())