const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const PORTS = require("../src/VARIABLES/PORTS")
// const http = require('http').Server(app);
const cors = require('cors')


const path = require("path");
const morgan = require('morgan');
const routes = require('./routes/powercar-routes')

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded());
app.use(cors())
app.use(morgan('dev'));

app.set('port', process.env.PORT || PORTS.API_PORT);

app.use(express.static(__dirname + '/public'));


app.get("/", (req, res) => {

  res.sendFile(path.join(__dirname, "public", "index"))
})
app.use("/", routes);

app.listen(app.get('port'), function () {

  console.log(`servidor en puerto ${app.get('port')}`);
});
