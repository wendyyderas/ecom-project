const express = require('express');
require('dotenv').config();
const helmet = require('helmet');
const morgan = require('morgan')
const mysql = require('mysql');
const app = express();
const PORT = 3001;


const con = mysql.createConnection({
    host: "localhost",
    port: '3306',
    user: "root",
    password: process.env.PASSWORD,
    database: "Ecom"
})

//this is for logging
app.use(morgan('dev'));
//this is for security 
app.use(helmet());

//products
app.get('/api/products', (req, res)=> {
    con.query('SELECT * FROM products', (err, result)=>{
        if(err) throw err;
        res.send(result);
    })
})

//get contacts
app.get('/api/persons', (req, res)=> {
    con.query('SELECT * FROM persons', (err, result)=>{
        if(err) throw err;
        res.send(result);
    })
})

//get by product type
app.get('/api/productfilter/:type', (req, res)=> {
    let type = req.params.type
    con.query('SELECT * FROM products WHERE ProductType = ?', [type], (err, result)=>{
        if(err) throw err;
        res.send(result);
    })
})

app.listen(PORT, () => console.log(`listening from ${PORT}`))