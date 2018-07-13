const express = require('express');
const app = express();
const http = require('http').Server(app);
const path=require("path");
const morgan=require('morgan');
const routes=require('../server/src/routes/serviceCar')
// const io = require('socket.io')(http);
app.use(morgan('dev'));
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));
app.get("/",(req,res)=>{
    
    res.sendFile(path.join(__dirname,"public","index.html"))
})
app.use("/",routes);
http.listen(app.get('port'), function () {
    
  console.log(`servidor en puerto ${app.get('port')}`);
});
