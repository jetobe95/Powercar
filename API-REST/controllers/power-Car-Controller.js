var dbConnection = require('../db/config');
const connection = dbConnection();
const mysql = require('mysql');
module.exports = {
    //Obtener Un post con una ID
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
    //Obtener Todos los posts
    getPosts: (req, res, next) => {
        const getProvidersQuery = `SELECT u.nickname,p.idposts,p.Contenido,p.creacion,u.foto 
        FROM Users u,posts p 
        where u.idUsers=p.idUser order by p.creacion DESC`
        connection.query(getProvidersQuery, (error, resul) => {
            if (error) {
                res.json({ status: false, error })
            } else {
                res.json({ status: true, resul }
                )
            }
        })

    },
    //Obtener los comentarios de un post
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
    //Agregar comentario a un post con ID

    addComment: (req, res) => {
        const { idpost, iduser, contenido, src, creacion } = req.body


        if (true) { //FIXME:Cambiarlo

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
    //Agregar un post
    addPost: (req, res) => {
        console.log("REQ.BODY", req.body);
        const { iduser, contenido, src, creacion } = req.body;
        if (iduser && contenido && src && creacion) {
            const insertInto = `INSERT INTO powerCar.posts (idUser, Contenido, src, creacion) 
           VALUES (${mysql.escape(iduser)}, ${mysql.escape(contenido)}, ${mysql.escape(src)}, ${mysql.escape(creacion)});`


            connection.query(insertInto, (error, resul) => {
                if (error) {
                    res.status(505).json({ status: false, message: "Error al obtener el Body" })
                } else {
                    res.status(200).json({ status: true, message: "Recibido", dbresponse: resul })
                }
            })
        }
        else {

            res.status(404).json({ status: false, message: "Error al obtener el Body" })
        }

    }




};




