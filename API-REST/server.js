const express = require('express');
const app = express();
// const http = require('http').Server(app);
const path=require("path");
const morgan=require('morgan');
const routes=require('./routes/powercar-routes')

app.use(morgan('dev'));

app.set('port', process.env.PORT || 3002);

app.use(express.static(__dirname + '/public'));


app.get("/",(req,res)=>{
    
    res.sendFile(path.join(__dirname,"public","index"))
})
app.use("/",routes);

app.listen(app.get('port'), function () {
    
  console.log(`servidor en puerto ${app.get('port')}`);
});
