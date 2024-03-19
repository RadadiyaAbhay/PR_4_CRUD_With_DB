const express  = require('express');
const app = express();
const db = require('./config/db')
const bodyParser = require('body-parser')
const router = require('./routes/index')
const port = 5173
    
app.set('view engine' , 'ejs');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use('/' , router)
app.use(express.static('public'))


app.listen(port , () =>{
    console.log( `Server is running at port ${port}`);
})