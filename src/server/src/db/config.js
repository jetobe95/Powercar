const mysql=require('mysql');

module.exports= ()=>{

    return mysql.createConnection({
        host:'servicecars.cn7vswhhlz0j.us-east-2.rds.amazonaws.com',
        user:'apiRest',
        password:'123456789',
        database:"powerCar"
    })
    
}