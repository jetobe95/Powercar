const express = require('express');
const app = express();
const PORTS = require("../src/VARIABLES/PORTS")
const cors = require('cors')
const path = require("path");
const routes = require('./routes/powercar-routes')





app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.set('port', process.env.PORT || PORTS.API_PORT);
app.use(express.static(__dirname + '/build'));


app.use("/", routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index"))
})

app.listen(app.get('port'), function () {
  console.log(`servidor en localhost:${app.get('port')}`);
});



