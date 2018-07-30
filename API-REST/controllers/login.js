const dbConnection = require("../db/config");
const connection = dbConnection();
const mysql = require("mysql");
const sEncrypt = require("../services/encryptPass");
const crypto = require("crypto");

function SignUp(req, res, next) { //Iniciar Session
    const { username, password } = req.body;
    console.log(req.body);
    const query = `SELECT nickname,pass FROM Users where nickname=${mysql.escape(username)}`
    connection.query(query, (error, result) => {
        if (error) {
            res.json({ message: "error", error })

        }
        if (result) {

            if (sEncrypt.ComprobarClave(result[0].pass, password)) return next()

            res.json({ message: "Contraseña incorrecta" })
        }


    })
}

function SignIn(req, res, next) { //Registrarse
    const { username, password, name } = req.body;
    const pass = sEncrypt.EncriptarClave(password)
    const md5 = crypto.createHash("md5").update(username).digest("hex");
    console.log(req.body);
    const imgDefault = `https://gravatar.com/avatar/${md5}?s=200&d=robohash`
    // console.log(imgDefault);
    // return;
    const query = `INSERT INTO Users (foto, nickname, Nombre, pass) 
    VALUES (${mysql.escape(imgDefault)}, ${mysql.escape(username)}, ${mysql.escape(name)}, ${mysql.escape(pass)});`


    connection.query(query, (error, result) => {
        if (error) {
            const msg = error.errno === 1062 ? "El usuario ya existe" : error.errno
            res.json({ message: "error", msg })
        }
        if (result) {
            return next()
        }







    })
}
module.exports = {
    SignIn,
    SignUp
}