//Encriptacion
const bcrypt = require("bcrypt-nodejs");



function EncriptarClave(pass) {

    return bcrypt.hashSync(pass)

}
function ComprobarClave(hash, pass) {

    const r = bcrypt.compareSync(pass, hash);
    return r;

}
module.exports = {
    EncriptarClave,
    ComprobarClave
}