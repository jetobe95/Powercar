var morgan = require('morgan');
var bodyParser = require('body-parser');
var express = require('express');
const routes=require('./routes/serviceCar');
const app=express();

//Setting
app.set('json spaces',4);

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"))
})
app.use("/",routes);

app.listen(3002,()=>{
    console.log("Servidor en el puerto 3000");
})