const router = require('express').Router()
const mysql = require('mysql')

//helps to connect to database/ server
const con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.PASSWORD,
    database: "Ecom"
})

//
con.connect(function(err) {
    if(err) throw err;
    console.log('connected as id' + con.threadId);
});

//
router.get('/products', (req,res) => {
    con.query('SELECT * FROM products', (err, result)=>{
        if(err) throw err;
        res.send(result);
    })
})

module.exports = router;