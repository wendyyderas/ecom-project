const express = require('express');
require('dotenv').config();
const helmet = require('helmet');
const morgan = require('morgan')
const mysql = require('mysql');
const app = express();
const PORT = 4000;

//this is connecting mysql database 
const con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.PASSWORD,
    database: "Ecom"
})

//connect server to productsapi.js
const productAPI = require('./routes/productAPI')


//setting the server to respond w/.json
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

//see if the server is running in production
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

//
app.use(function(req, res, next){
    res.setTimeout(12, function(){
        console.log('Request has timed out.');
            res.send(408);
        });

    next();
});
//allows server logging
app.use(morgan('dev'));

//this is for content security headers
app.use(helmet());

//should give the product types
app.use('/api', productAPI)

//should give you all of the information for the contact page
app.get('/api/persons', (req, res)=> {
    con.query('SELECT * FROM persons', (err, result)=>{
        if(err) throw err;
        res.send(result);
    })
})

//this allows my productsfilter to give you each type such as macaroons, cupcakes, cake, cakepops
app.get('/api/productfilter/:type', (req, res)=> {
    let type = req.params.type
    console.log(req.params.type)
    con.query('SELECT * FROM products WHERE ProductType = ?', [type], (err, result)=>{
        if(err) throw err;
        res.send(result);
    })
})


//brings in my react/ styles from react
app.get('*', function(req,res) {
    res.sendFile(path.join(__dirname,'./client/public/index.html'));
});

app.listen(PORT, () => console.log(`listening from ${PORT}`))