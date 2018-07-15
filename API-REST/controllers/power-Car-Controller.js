var dbConnection = require('../db/config');
const connection = dbConnection();
const mysql = require('mysql');
module.exports = {
    getPost: (req, res) => {
        const { postId } = req.params;
        const getProvidersQuery = `
        SELECT u.nickname,p.idposts,p.Contenido,p.creacion,u.foto 
        FROM Users u,posts p
        where u.idUsers=p.iduser and p.idUser=u.idUsers and
        p.idposts=${mysql.escape(postId)}`
        connection.query(getProvidersQuery, (error, resul) => {
            if (error) {
                res.json({ status: false, error })
            } else {
                res.json({ status: true, resul }
                )
            }
        })

    },
    getPosts: (req, res) => {
        const getProvidersQuery = `SELECT u.nickname,p.idposts,p.Contenido,p.creacion,u.foto 
        FROM Users u,posts p 
        where u.idUsers=p.idUser order by p.creacion ASC`
        connection.query(getProvidersQuery, (error, resul) => {
            if (error) {
                res.json({ status: false, error })
            } else {
                res.json({ status: true, resul }
                )
            }
        })

    },
    getComments: (request, response) => {
        const { postId } = request.params;
        const getWorkersQuery = `
        SELECT c.contenido,c.creacion,u.nickname,u.foto ,c.idcomments
        FROM Users u,comments c 
        where c.idpost=${mysql.escape(postId)} 
        and u.idUsers=c.iduser order by c.creacion ASC ;`

        connection.query(getWorkersQuery, (error, resul) => {
            if (error) {
                response.json({ status: false, error })
            } else {

                response.json({
                    status: true,
                    resul
                });


            }
        })




    },

    addComment: (req, res) => {
        const { idpost, iduser, contenido, src, creacion } = req.body
        console.log(req.body);

        if (true) {

            const insertInto = `INSERT INTO 
            comments (iduser, contenido, src, creacion, idpost) 
            VALUES (${mysql.escape(iduser)}, 
            ${mysql.escape(contenido)},${mysql.escape(src)}, 
            ${mysql.escape(creacion)},
             ${mysql.escape(idpost)});`
            connection.query(insertInto, (error, resul) => {
                if (error) {
                    res.json({ status: false, error })
                } else {

                    res.json({
                        status: true,
                        resul
                    });


                }
            })
        }
        else {
            console.log('error al recibir idpost, iduser, contenido, src, creacion ');

            res.json(
                {
                    status: false,
                    message: "Error al recibir idpost, iduser, contenido, src, creacion"
                }
            )
        }

    },
    deleteProduct: (req, res) => {
        const { id } = req.params;
        products.forEach((product, i) => {

            products.splice(i, 1);

        });
        res.json({ "eliminado": true })

    }





};