const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();



// Bodyparser middleware
app.use(bodyParser.json());

// MySQL connection
const pool = mysql.createPool({
    host: 'localhost',
    user:'root',
    password: 'password',
    database: 'matu'
});

// Connect to database
pool.getConnection((err, connection) => {
    if(err) throw err; // not connected!
    console.log('Connected to the database.');
    connection.release(); // return the connection to the pool
});

// Add this code if you want to check if your app is working correctly
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Set up a route to receive data from the client
app.post('/send-data', (req, res) => {
    // Make sure you have received data
    if (!req.body) return res.sendStatus(400);

    // Get the data from the request body
    const data = req.body;

    // Create a SQL query
    const sqlQuery = 'INSERT INTO piracy';

    // Execute the SQL query with the data received from the client
    pool.query(sqlQuery, [data.property1, data.property2], (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Data received and inserted into the database.');
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




//probar conexion

/*connection.connect(error => {
    if(error){
        throw error;
    }
    console.log("Connected!");
});

connection.end(error => {
    if(error){
        throw error;
    }
    console.log("Connection closed!");
});*/

/*Router.get('/', (req,res) => {
con.query ('SELECT * FROM iracy', (error, results) => {
    if (error) {
        console.log(error);
        res.status(500).send ('issue');
    }
    else {
       
        const products = results;
        res.status(201).json(products);
    }
});
});*/

